import "../styles/Product.scss";
import { productData } from "../data";
import { useParams, Link } from "react-router-dom";

export default function Product(props) {
  //use this hook to get product id
  const { id } = useParams();

  //if product id matches id from useParams hook, return product info
  const product = productData.products.find(
    (productId) => productId.id === Number(id)
  );
  return (
    <div>
      <div className="store-backlink">
        <Link to="/store" className="store-backlink">
          Back to LTBT STORE
        </Link>
      </div>
      <div className="product-details-container">
        <div className="product-details-image">
          <img src={product.image} alt="ltbt merch" />
        </div>
        <div className="product-details-info">
          <h1 className="product-details-name">{product.name}</h1>
          <h5 className="product-details-price">$ {product.price}</h5>
          <p className="product-details-description">{product.description}</p>
        </div>
        <div className="product-action">
          <div className="product-qty">
            QTY:{" "}
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <button className="product-cart-button">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
