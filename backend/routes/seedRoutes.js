import express from "express";
import productData from "../data.js";
import Product from "../models/productModels.js";
import User from "../models/userModel.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  //pass products from model to route
  await Product.remove({});
  const createdProducts = await Product.insertMany(productData.products);
  //pass users from model to route
  await User.remove({});
  const createdUsers = await User.insertMany(productData.users);
  res.send({ createdProducts, createdUsers });
});

export default seedRouter;
