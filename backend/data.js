// import image from ".//images/1.png";
// import img from "./images/8.png";
import bcrypt from "bcryptjs";

// import imagetest from "../frontend/src/images/2.jpg"
// import img from "../frontend/public/images/placeholder-image.png";
import path from "path";
path.extname("../frontend/public/images/placeholder-image.png"); // .png

const productData = {
  users: [
    {
      name: "ltbt",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Light",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "LTBT Sweater",
      slug: "ltbt-sweater",
      price: 70,
      image:
        "https://drive.google.com/file/d/15eCTxKoxz8Yft27msGEL8OaGuInDVpJ4/view?usp=sharing",
      category: "Hoodies",
      countInStock: 10,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      name: "LTBT Keychain",
      slug: "ltbt-keychain",
      price: 50,
      image: "../frontend/public/images/placeholder-image.png",
      category: "Accessories",
      countInStock: 9,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      name: "LTBT Sticker",
      slug: "ltbt-sticker",
      price: 20,
      image: "../public/images/placeholder-image.png",
      category: "Stickers",
      countInStock: 17,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ],
};

export default productData;
