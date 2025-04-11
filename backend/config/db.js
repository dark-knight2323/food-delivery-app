import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://yanalasanjayreddy:oFwLqTFKvaCR5Wne@cluster0.cxc0f.mongodb.net/food-del"
    )
    .then(() => {
      console.log("Connected to MongoDB");
    });
};
