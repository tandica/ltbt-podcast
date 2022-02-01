import "../styles/Product.scss";
import { productData } from "../data";
import { useParams } from "react-router-dom";

export default function Product(props) {
  const { id } = useParams();
  console.log(id);

  const product = productData.products.find(
    (productId) => productId.id === Number(id)
  );
  return <div>{product.name}</div>;
}
