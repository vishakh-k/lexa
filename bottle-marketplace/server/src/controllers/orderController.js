const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const asyncHandler = require("../middleware/async");

// Create new order
// @desc    Create new order
// @route   POST /api/v1/orders
// @access  Private
exports.createOrder = asyncHandler(async (req, res) => {
  try {
    const { products, shippingAddress, paymentMethod } = req.body;

    // Calculate total amount
    let totalAmount = 0;
    const orderProducts = [];

    for (const item of products) {
      const product = await Product.findById(item.product);

      if (!product) {
        return res.status(404).json({
          status: "error",
          message: `Product not found with ID: ${item.product}`,
        });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          status: "error",
          message: `Insufficient stock for product: ${product.name}`,
        });
      }

      const price = product.onSale ? product.salePrice : product.price;
      totalAmount += price * item.quantity;

      orderProducts.push({
        product: item.product,
        quantity: item.quantity,
        color: item.color,
        price: price,
      });

      // Update product stock
      await Product.findByIdAndUpdate(item.product, {
        $inc: { stock: -item.quantity },
      });
    }

    // Calculate shipping fee and tax
    const shippingFee = totalAmount > 1000 ? 0 : 100;
    const tax = totalAmount * 0.18;

    const order = await Order.create({
      user: req.user._id,
      products: orderProducts,
      shippingAddress,
      paymentMethod,
      totalAmount,
      shippingFee,
      tax,
    });

    res.status(201).json({
      status: "success",
      data: { order },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
});

// Get all orders (admin only)
// @desc    Get all orders
// @route   GET /api/v1/orders
// @access  Private
exports.getAllOrders = asyncHandler(async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");

    res.status(200).json({
      status: "success",
      results: orders.length,
      data: { orders },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
});

// Get user's orders
// @desc    Get user's orders
// @route   GET /api/v1/orders
// @access  Private
exports.getMyOrders = asyncHandler(async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });

    res.status(200).json({
      status: "success",
      results: orders.length,
      data: { orders },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
});

// Get single order
// @desc    Get single order
// @route   GET /api/v1/orders/:id
// @access  Private
exports.getOrder = asyncHandler(async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        status: "error",
        message: "Order not found",
      });
    }

    // Check if the order belongs to the user or if user is admin
    if (
      order.user.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        status: "error",
        message: "You do not have permission to view this order",
      });
    }

    res.status(200).json({
      status: "success",
      data: { order },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
});

// Update order status (admin only)
// @desc    Update order
// @route   PUT /api/v1/orders/:id
// @access  Private
exports.updateOrderStatus = asyncHandler(async (req, res) => {
  try {
    const { orderStatus } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!order) {
      return res.status(404).json({
        status: "error",
        message: "Order not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: { order },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
});

// @desc    Delete order
// @route   DELETE /api/v1/orders/:id
// @access  Private
exports.deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({
      success: false,
      error: "Order not found",
    });
  }

  await order.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
