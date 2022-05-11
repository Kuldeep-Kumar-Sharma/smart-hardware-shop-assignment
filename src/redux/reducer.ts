import * as actionTypes from "./constants";
import { AppState, AppAction, Product } from "../models/index";

const initialState: AppState = {
  recommendations: [],
    queryProducts: [],
  cart:[]
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
          return {
              ...state,
              cart: [...state.cart,item]
      };
  }
  return state;
};

export default reducer;
