const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxlength: [100, "Product name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price cannot be negative"],
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
      enum: {
        values: ["sports", "travel", "kids", "premium"],
        message: "Category must be: sports, travel, kids, or premium",
      },
    },
    images: [
      {
        type: String,
        required: [true, "At least one product image is required"],
      },
    ],
    colors: [
      {
        name: {
          type: String,
          required: true,
        },
        hexCode: {
          type: String,
          required: true,
        },
      },
    ],
    specifications: {
      capacity: {
        type: Number,
        required: true,
      },
      material: String,
      dimensions: String,
      weight: Number,
      features: [String],
    },
    stock: {
      type: Number,
      required: [true, "Stock quantity is required"],
      min: [0, "Stock cannot be negative"],
    },
    rating: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be above 1.0"],
      max: [5, "Rating must be below 5.0"],
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    isNew: {
      type: Boolean,
      default: true,
    },
    onSale: {
      type: Boolean,
      default: false,
    },
    salePrice: {
      type: Number,
      validate: {
        validator: function (value) {
          return !this.onSale || (value && value < this.price);
        },
        message: "Sale price must be lower than regular price",
      },
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Add index for better search performance
productSchema.index({ name: "text", description: "text" });

// Virtual for discount percentage
productSchema.virtual("discountPercentage").get(function () {
  if (this.onSale && this.salePrice) {
    return Math.round(((this.price - this.salePrice) / this.price) * 100);
  }
  return 0;
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
