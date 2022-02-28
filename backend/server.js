import express from "express";
const router = express.Router();
import { data } from "./data.js";
import axios from "axios";
const cors = require("cors");

const app = express();
app.use(cors());

//const dataToSend = data.products;
//console.log(dataToSend);

//store page
app.get("/api/store", (req, res) => {
  res.send(data.products);
});

//individual product page
app.get("/api/store/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((product) => product.id === productId);

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: "Product not found." });
  }
});

// axios.post("/api/store", (req, res) => {
//   res.send(productData.products);
// });

app.listen(5000, () => {
  console.log("SERVER RUNNING ON PORT 5000");
});
