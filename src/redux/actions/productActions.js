import { ActionTypes } from "../constants/action-types";
import axios from "axios";
import fakeApi from "../../apis/fakeApi";

export const fetchProduct = (productId) => async (dispatch) => {
  const product = await fakeApi.get(`/products/${productId}`).then((res) => {
    return res.data;
  });
  dispatch({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  });
};

export const fetchProducts = () => async (dispatch) => {
  const products = await fakeApi.get(`/products`).then((res) => {
    return res.data;
  });
  dispatch({
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  });
};
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
