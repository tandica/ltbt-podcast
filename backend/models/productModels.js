import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: "string", required: true, unique: true },
    slug: { type: "string", required: true, unique: true },
    image: { type: "string", required: false },
    images: [String],
    category: { type: "string", required: true },
    description: { type: "string", required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
