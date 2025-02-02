const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Order must belong to a user"],
    },
    products: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
          required: [true, "Order must contain at least one product"],
        },
        quantity: {
          type: Number,
          required: [true, "Product quantity is required"],
          min: [1, "Quantity must be at least 1"],
        },
        color: {
          type: String,
          required: [true, "Product color is required"],
        },
        price: {
          type: Number,
          required: [true, "Product price is required"],
        },
      },
    ],
    shippingAddress: {
      street: {
        type: String,
        required: [true, "Street address is required"],
      },
      city: {
        type: String,
        required: [true, "City is required"],
      },
      state: {
        type: String,
        required: [true, "State is required"],
      },
      postalCode: {
        type: String,
        required: [true, "Postal code is required"],
      },
      country: {
        type: String,
        required: [true, "Country is required"],
        default: "India",
      },
    },
    paymentMethod: {
      type: String,
      required: [true, "Payment method is required"],
      enum: ["card", "upi", "cod"],
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    orderStatus: {
      type: String,
      enum: ["processing", "shipped", "delivered", "cancelled"],
      default: "processing",
    },
    totalAmount: {
      type: Number,
      required: [true, "Total amount is required"],
    },
    shippingFee: {
      type: Number,
      default: 0,
    },
    tax: {
      type: Number,
      default: 0,
    },
    deliveryNotes: String,
    trackingNumber: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual for total amount including shipping and tax
orderSchema.virtual("finalAmount").get(function () {
  return this.totalAmount + this.shippingFee + this.tax;
});

// Populate products and user info when querying
orderSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name email phone",
  }).populate({
    path: "products.product",
    select: "name images",
  });

  next();
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
