import express from "express";
import data from "./data";
import axios from "axios";

const app = express();

//const dataToSend = data.products;
//console.log(dataToSend);

app.get("/api/store", (req, res) => {
  console.log("reqqqqq", data.products);
  res.send(dataToSend);
  //console.log("***********", data.products);
  console.log(res);

  //res.send(products);
});

// axios.post("/api/store", (req, res) => {
//   res.send(productData.products);
// });

app.listen(5000, () => {
  console.log("SERVER RUNNING ON PORT 5000");
});
