import * as actionTypes from "./constants";
import { AppState, AppAction, Product, Cart } from "../models/index";

const initialState: AppState = {
  recommendations: [],
  queryProducts: [],
  cart: [
    {
      id: 0, //Fow now customet is always 0
      products: [],
    },
  ],
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
      if (state.cart.length > 0) {
        for (let i = 0; i < state.cart.length; i++) {
          if (state.cart[i].products.find((it) => it.id === item.id)) {
            const updatedQuantity = state.cart[i].products.map((prd) => {
              return prd.id === item.id
                ? { id: prd.id, quantity: prd.quantity + 1 }
                : prd;
            });
            return {
              ...state,
              cart: [
                {
                  id: 0, //Customer for now is always 0
                  products: [...updatedQuantity],
                },
              ],
            };
          } else {
            state.cart[0].products.push({ id: item.id, quantity: 1 });
            return state;
          }
        }
      }
      break;
    case actionTypes.REMOVE_FROM_CART:
      const deletingItem = action.payload as Cart;

      if (state.cart.length > 0) {
        for (let i = 0; i < state.cart.length; i++) {
          if (
            state.cart[i].products.find(
              (it) => it.id === deletingItem.id && it.quantity === 1
            )
          ) {
            const deletedCartItem = state.cart[i].products.filter(
              (prd) => prd.id !== deletingItem.id
            );
            return {
              ...state,
              cart: [
                {
                  id: 0, //Customer for now is always 0
                  products: [...deletedCartItem],
                },
              ],
            };
          } else if (
            state.cart[i].products.find(
              (it) => it.id === deletingItem.id && it.quantity > 1
            )
          ) {
            const updatedQuantity = state.cart[i].products.map((prd) => {
              return prd.id === deletingItem.id
                ? { id: prd.id, quantity: prd.quantity - 1 }
                : prd;
            });
            return {
              ...state,
              cart: [
                {
                  id: 0, //Customer for now is always 0
                  products: [...updatedQuantity],
                },
              ],
            };
          } else {
            state.cart[0].products.pop();
            return state;
          }
        }
      }
      break;
  }
  return state;
};

export default reducer;
