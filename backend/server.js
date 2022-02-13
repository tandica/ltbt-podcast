import express from "express";
const router = express.Router();
import { data } from "./data.js";
import axios from "axios";
const cors = require("cors");

const app = express();
app.use(cors());

//const dataToSend = data.products;
//console.log(dataToSend);

app.get("/api/store", (req, res) => {
  //console.log("reqqqqq", data.products);
  res.send(data.products);
  //console.log("***********", data.products);
  //console.log(res);

  //res.send(products);
});

// axios.post("/api/store", (req, res) => {
//   res.send(productData.products);
// });

app.listen(5000, () => {
  console.log("SERVER RUNNING ON PORT 5000");
});
