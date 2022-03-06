import "../styles/Store.scss";
import { Link } from "react-router-dom";

function Product(props) {
  const { product } = props;

  return (
    <div>
      {" "}
      <div className="product" key={product.slug}>
        <Link to={`/store/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="about-team-img"
          />
        </Link>
        <div className="product-info">
          <Link to={`/store/${product.slug}`}>
            <p className="product-name">{product.name}</p>
          </Link>
          <p className="product-price">
            <strong> $ {product.price} </strong>
          </p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
