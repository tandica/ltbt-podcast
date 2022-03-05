import "../styles/Product.scss";
import { productData } from "../data/data";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { detailsProduct } from "../actions/productActions";

function Product(props) {
  const params = useParams();
  const { slug } = params;

  console.log(params);
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}

export default Product;

//use this hook to get product id
// const { id } = useParams();

//if product id matches id from useParams hook, return product info
// const product = productData.products.find(
//   (productId) => productId.id === Number(id)
// );

//OLD CODE
//   console.log("-----", props.match.params.id);
//   const productDetails = useSelector((state) => state.productDetails);
//   const { product, loading, error } = productDetails;
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(detailsProduct(props.match.params.id));

//     return () => {};
//   }, []);

//   return (
//     <div>
//       <div className="store-backlink">
//         <Link to="/store" className="store-backlink">
//           Back to LTBT STORE
//         </Link>
//       </div>
//       {loading ? (
//         <div>Loading...</div>
//       ) : error ? (
//         <div>{error}</div>
//       ) : (
//         <div className="product-details-container">
//           <div className="product-details-image">
//             <img src={product.image} alt="ltbt merch" />
//           </div>
//           <div className="product-details-info">
//             <h1 className="product-details-name">{product.name}</h1>
//             <h5 className="product-details-price">$ {product.price}</h5>
//             <p className="product-details-description">{product.description}</p>
//           </div>
//           <div className="product-action">
//             <div className="product-qty">
//               QTY:{" "}
//               <select>
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//               </select>
//             </div>
//             <button className="product-cart-button">ADD TO CART</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
