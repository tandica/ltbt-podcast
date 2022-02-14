function productlistReducer(state = { products: [] }, action) {
  switch (action.type) {
    //if the case id this, it means that im going to send the request to the server to get the list of products
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    //get data from server
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
