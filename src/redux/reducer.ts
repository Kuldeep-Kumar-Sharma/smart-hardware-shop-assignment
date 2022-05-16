import * as actionTypes from "./constants";
import { AppState, AppAction, Product, Cart } from "../models/index";

const initialState: AppState = {
  recommendations: [],
  queryProducts: [],
  cart: [],
};
const reducer = (
  state: AppState = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case actionTypes.GET_RECOMMENDATIONS_SUCCESS:
      const updatedState = {
        ...state,
        recommendations: action.payload as Product[],
      };
      return updatedState;

    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        queryProducts: action.payload as Product[],
      };
    case actionTypes.ADD_TO_CART:
      const item = action.payload as Product;
      let updatedQuantity = [{ id: item.id, quantity: 1 }];
      
      if (state.cart.length > 0) {
        for (let i = 0; i < state.cart.length; i++){
          updatedQuantity = state.cart[i].products.map((prd) => {
            return prd.id === item.id
              ? { ...prd, quantity: prd.quantity + 1 }
              : prd;
          });
        }
      }
      return {
        ...state,
        cart: [
          {
            ...state.cart,
            id: 0,
            products: updatedQuantity,
          },
        ],
      };
    case actionTypes.REMOVE_FROM_CART:
      const deletingItem = action.payload as Cart;
      return {
        ...state,
        cart: state.cart.filter((item) => item !== deletingItem),
      };
  }
  return state;
};

export default reducer;
