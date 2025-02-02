const Product = require('../models/productModel');
const Order = require('../models/orderModel');

// Product Management
exports.addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      images,
      colors,
      specifications,
      stock,
      featured,
      isNew,
      onSale,
      salePrice
    } = req.body;

    const newProduct = await Product.create({
      name,
      description,
      price,
      category,
      images,
      colors,
      specifications,
      stock,
      featured,
      isNew,
      onSale,
      salePrice
    });

    res.status(201).json({
      status: 'success',
      data: {
        product: newProduct
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!product) {
      return res.status(404).json({
        status: 'error',
        message: 'No product found with that ID'
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        product
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        status: 'error',
        message: 'No product found with that ID'
      });
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};

// Dashboard Statistics
exports.getDashboardStats = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const lowStockProducts = await Product.countDocuments({ stock: { $lt: 10 } });
    const outOfStockProducts = await Product.countDocuments({ stock: 0 });
    const totalOrders = await Order.countDocuments();
    
    const recentOrders = await Order.find()
      .sort('-createdAt')
      .limit(5)
      .populate('user', 'name email');

    const recentProducts = await Product.find()
      .sort('-createdAt')
      .limit(5);

    res.status(200).json({
      status: 'success',
      data: {
        stats: {
          totalProducts,
          lowStockProducts,
          outOfStockProducts,
          totalOrders
        },
        recentOrders,
        recentProducts
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
}; 