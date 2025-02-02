const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`🌿 MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

// Handle MongoDB connection errors after initial connection
mongoose.connection.on("error", (err) => {
  console.error(`🔌 MongoDB connection error: ${err}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("🔌 MongoDB disconnected");
});

module.exports = connectDB;
