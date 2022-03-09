import express from "express";
import productData from "../data.js";
import Product from "../models/productModels.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(productData.products);
  res.send({ createdProducts });
});

export default seedRouter;
