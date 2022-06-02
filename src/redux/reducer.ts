import * as actionTypes from './constants';
import {
  AppState, AppAction, Product, Cart,
} from '../models/index';

const initialState: AppState = {
  recommendations: [],
  queryProducts: [],
  cart: [
    {
      id: 0, // Fow now customet is always 0
      products: [],
    },
  ],
  loadingProducts: false,
  productsFetchingError: '',
};
const reducer = (
  state: AppState = initialState,
  action: AppAction,
): AppState => {
  switch (action.type) {
    case actionTypes.GET_RECOMMENDATIONS_SUCCESS:
      return {
        ...state,
        recommendations: action.payload as Product[],
      };

    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loadingProducts: false,
        productsFetchingError: '',
        queryProducts: [...state.queryProducts, ...action.payload as Product[]],
      };
    case actionTypes.ADD_TO_CART:
      if (state.cart.length > 0) {
        const item = action.payload as Product;
        for (let i = 0; i < state.cart.length; i += 1) {
          if (state.cart[i].products.find((it) => it.id === item.id)) {
            const updatedQuantity = state.cart[i].products.map((prd) => (prd.id === item.id
              ? { id: prd.id, quantity: prd.quantity + 1 }
              : prd));
            return {
              ...state,
              cart: [
                {
                  id: 0, // Customer for now is always 0
                  products: [...updatedQuantity],
                },
              ],
            };
          }
          state.cart[0].products.push({ id: item.id, quantity: 1 });
          return state;
        }
      }
      break;
    case actionTypes.REMOVE_FROM_CART:
      if (state.cart.length > 0) {
        const deletingItem = action.payload as Cart;
        for (let i = 0; i < state.cart.length; i += 1) {
          if (
            state.cart[i].products.find(
              (it) => it.id === deletingItem.id && it.quantity === 1,
            )
          ) {
            const deletedCartItem = state.cart[i].products.filter(
              (prd) => prd.id !== deletingItem.id,
            );
            return {
              ...state,
              cart: [
                {
                  id: 0, // Customer for now is always 0
                  products: [...deletedCartItem],
                },
              ],
            };
          } if (
            state.cart[i].products.find(
              (it) => it.id === deletingItem.id && it.quantity > 1,
            )
          ) {
            const updatedQuantity = state.cart[i].products.map((prd) => (prd.id === deletingItem.id
              ? { id: prd.id, quantity: prd.quantity - 1 }
              : prd));
            return {
              ...state,
              cart: [
                {
                  id: 0, // Customer for now is always 0
                  products: [...updatedQuantity],
                },
              ],
            };
          }
          state.cart[0].products.pop();
          return state;
        }
      }
      break;

    case actionTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loadingProducts: false,
        productsFetchingError: action.payload as string,
      };
    case actionTypes.GET_PRODUCTS_FETCHING:
      return {
        ...state,
        loadingProducts: action.payload as boolean,
      };
    default: return state;
  }
  return state;
};

export default reducer;
