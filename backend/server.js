// import express from "express";
// const router = express.Router();
// import data from "./data.js";
// import axios from "axios";
// const cors = require("cors");

// const app = express();
// app.use(cors());

// //const dataToSend = data.products;
// //console.log(dataToSend);
// // const output = data.products.find((product) => product.id);
// // console.log(output);

// //keep console.logging on the product variable to see what makes it undefined
// //individual product page
// app.get("/api/store/:id", (req, res) => {
//   //const productId = req.params.id;
//   //console.log(req.params.id);

//   // function checkID(x) {
//   //   x.id === productId;
//   // }

//   const product = data.products.find((product) => product.id === req.params.id);
//   // const product2 = data.products.find((product) => {
//   //   if (product.id) {
//   //     product.id = productId;
//   //     //console.log(productId);
//   //   } else {
//   //     //product.id = productId;
//   //     console.log("hi");
//   //   }
//   //});

//   console.log("--------", typeof product2);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ msg: "Product not found." });
//   }
// });

// //store page
// app.get("/api/store", (req, res) => {
//   res.send(data.products);
// });

// // axios.post("/api/store", (req, res) => {
// //   res.send(productData.products);
// // });

// app.listen(5000, () => {
//   console.log("SERVER RUNNING ON PORT 5000");
// });
