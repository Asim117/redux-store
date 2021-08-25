import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
const reducers = combineReducers({
  allProducts: productReducer,
  selecteProduct: selectedProductReducer,
});

export default reducers;
