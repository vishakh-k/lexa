const express = require("express");
const productController = require("../controllers/productController");
const { protect, restrictTo } = require("../middleware/authMiddleware");

const router = express.Router();

// Public routes
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProduct);

// Protected routes (admin only)
router
  .route("/")
  .post(protect, restrictTo("admin"), productController.createProduct);

router
  .route("/:id")
  .patch(protect, restrictTo("admin"), productController.updateProduct)
  .delete(protect, restrictTo("admin"), productController.deleteProduct);

module.exports = router;
