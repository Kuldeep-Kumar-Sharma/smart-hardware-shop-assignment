import axios from 'axios';
import { Dispatch } from 'redux';
import * as actionTypes from './constants';
import { Product, Error, AppAction } from '../models/index';

export const addToCart = (product: Product) => ({
  type: actionTypes.ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (product?: Product) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: product,
});

export const getProductsStart = (query: string) => (dispatch: Dispatch) => {
  const loadingAction: AppAction = {
    type: actionTypes.GET_PRODUCTS_FETCHING,
    payload: true,
  };
  dispatch(loadingAction);

  axios
    .get<Product[]>(
      `http://localhost:8080/products?q=${query}&_page=1&_limit=8`,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    )
    .then((response) => {
      console.log(response);
      if (response.data.length > 0) {
        const successAction: AppAction = {
          type: actionTypes.GET_PRODUCTS_SUCCESS,
          payload: response.data,
        };
        dispatch(successAction);
      } else {
        const failureAction: AppAction = {
          type: actionTypes.GET_PRODUCTS_FAILURE,
          payload:
              'There are no products available as per query name!! Come back later to explore more!',
        };
        dispatch(failureAction);
      }
    })
    .catch((error: Error) => {
      const failureAction: AppAction = {
        type: actionTypes.GET_PRODUCTS_FAILURE,
        payload: error.msg,
      };
      dispatch(failureAction);
    });
};

export const getRecommendationsStart = () => (dispatch: Dispatch) => {
  axios
    .get<Product[]>('http://localhost:8080/recommendeds', {
      headers: {
        Accept: 'application/json',
      },
    })
    .then((response) => {
      const successAction: AppAction = {
        type: actionTypes.GET_RECOMMENDATIONS_SUCCESS,
        payload: response.data,
      };
      dispatch(successAction);
    })
    .catch(() => {
      const failureAction: AppAction = {
        type: actionTypes.GET_RECOMMENDATIONS_FAILURE,
        payload: [],
      };
      dispatch(failureAction);
    });
};
