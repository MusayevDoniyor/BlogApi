const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongo_url = process.env.MONGO_URL.replace(
      "<db_password>",
      process.env.MONGO_PASSWORD
    );

    await mongoose.connect(mongo_url);

    console.log("MongoDB connected ✅");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
