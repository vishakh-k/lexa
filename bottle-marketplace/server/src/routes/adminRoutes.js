const express = require("express");
const adminController = require("../controllers/adminController");
const { protect, restrictTo } = require("../middleware/authMiddleware");

const router = express.Router();

// Protect all admin routes
router.use(protect);
router.use(restrictTo("admin"));

// Product Management
router.post("/products", adminController.addProduct);
router.patch("/products/:id", adminController.updateProduct);
router.delete("/products/:id", adminController.deleteProduct);

// Dashboard
router.get("/dashboard", adminController.getDashboardStats);

module.exports = router;
