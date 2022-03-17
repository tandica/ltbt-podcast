// import image from ".//images/1.png";
// import img from "./images/8.png";
import bcrypt from "bcryptjs";

// import imagetest from "../frontend/src/images/2.jpg"

export const upcomingLiveShows = [
  {
    date: "August 3, 2022",
    title: "Title of Show",
    location: "Toronto, Ontario",
  },
  {
    date: "August 4, 2022",
    title: "Title of Show",
    location: "Toronto, Ontario",
  },
  {
    date: "August 3, 2022",
    title: "Title of Show",
    location: "Toronto, Ontario",
  },
];

export const upcomingEvents = [
  {
    title: "Black Girl Magic",
    date: "September 3, 2022",
    info: "Event Information",
  },
  {
    title: "Herstory",
    date: "September 7, 2022",
    info: "Event Information",
  },
  {
    title: "Blackity Black Black",
    date: "September 3, 2022",
    info: "Event Information",
  },
  {
    title: "Women in Poetry",
    date: "September 3, 2022",
    info: "Event Information",
  },
  {
    title: "For, To, and By the People",
    date: "September 3, 2022",
    info: "Event Information",
  },
];

export const teamMember = [
  {
    name: "Kadi",
    photo: "placeholder-image.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    name: "Hawa",
    photo: "assets/placeholder-image.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    name: "Seidy",
    photo: "assets/placeholder-image.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

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
      image: "/images/1.png",
      category: "Hoodies",
      countInStock: 10,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      name: "LTBT Keychain",
      slug: "ltbt-keychain",
      price: 50,
      image: "/images/1.png",
      category: "Accessories",
      countInStock: 9,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      name: "LTBT Sticker",
      slug: "ltbt-sticker",
      price: 20,
      image: "/images/1.png",
      category: "Stickers",
      countInStock: 17,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ],
};

export default productData;
