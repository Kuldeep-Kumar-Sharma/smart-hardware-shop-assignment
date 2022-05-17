import axios from "axios";
import * as actionTypes from "./constants";
import { Product, Error, AppAction } from "../models/index";
import { Dispatch } from "redux";

export const addToCart = (product: Product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product?: Product) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: product,
  };
};

;
export const getProductsStart = (query: string) => {
  return (dispatch: Dispatch) => {
    axios
      .get<Product[]>(`http://localhost:8080/products?_page=1&_limit=8`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        const successAction: AppAction = {
          type: actionTypes.GET_PRODUCTS_SUCCESS,
          payload: response.data,
        };
        dispatch(successAction);
      })
      .catch((error: Error) => {
        const failureAction: AppAction = {
          type: actionTypes.GET_PRODUCTS_FAILURE,
          payload: error,
        };
        dispatch(failureAction);
      });
  };
};

export const getRecommendationsStart = () => {
  return (dispatch: Dispatch) => {
    axios
      .get<Product[]>("http://localhost:8080/recommendeds", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        const successAction: AppAction = {
          type: actionTypes.GET_RECOMMENDATIONS_SUCCESS,
          payload: response.data,
        };
        dispatch(successAction);
      })
      .catch((error: Error) => {
        const failureAction: AppAction = {
          type: actionTypes.GET_RECOMMENDATIONS_FAILURE,
          payload: [],
        };
        dispatch(failureAction);
      });
  };
};
