import { createStore, combineReducers } from "redux";

//reducre is a function that gets a starte and action and returns a new state based on that action
const initialState = {};
const reducer = combineReducers({
  productList: productListReducer,
});

const store = createStore(reducer, initialState);
