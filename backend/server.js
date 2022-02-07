import express from "express";
import { productData } from "./data";

const app = express();

app.get("/api/store", (req, res) => {
  res.send(productData.products);
});

app.listen(5000, () => {
  console.log("SERVER RUNNING ON PORT 5000");
});
