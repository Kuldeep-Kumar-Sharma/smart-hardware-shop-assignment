import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Dispatch } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartFlatbed, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart } from '../../redux/actions';
import Cart from '../../components/Cart';
import {
  Cart as CartModel, AppState, Product, CartProducts,
} from '../../models/index';

import {
  Container, CartItemsList, Items, EmptyCart, H4, Badge,
} from './styles';

const CartItems = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const cartItems: readonly CartModel[] = useSelector(
    (state: AppState) => state.cart,
    shallowEqual,
  );

  const products: readonly Product[] = useSelector(
    (state: AppState) => state.queryProducts,
    shallowEqual,
  );

  const removeFromCartonClick = (cartItem?: Product) => {
    dispatch(removeFromCart(cartItem));
  };

  useEffect(() => {}, [cartItems]);

  const getProductsStart = (id: number) => products.find((prd) => prd.id === id);

  const countCartItems = (cartProducts: CartProducts[]) => {
    let totalItems = 0;
    for (let i = 0; i < cartProducts.length; i += 1) {
      totalItems += cartProducts[i].quantity;
    }
    return totalItems;
  };

  const getTotalOfCart = (cartProducts: CartProducts[]) => {
    let totalItemsPrices = 0;
    for (let i = 0; i < cartProducts.length; i += 1) {
      totalItemsPrices += getProductsStart(cartProducts[i].id)!!.price;
    }
    return totalItemsPrices;
  };
  return (
    <Container>
      <Items>
        <h4>Cart Items</h4>
        <FontAwesomeIcon icon={faCartShopping} />
        <Badge>{countCartItems(cartItems[0].products)}</Badge>
      </Items>
      {cartItems[0].products.length ? (
        <CartItemsList>
          {cartItems.map(
            (cartItem) => cartItem.products
              && cartItem.products.map((cartProduct) => (
                <Cart
                  key={cartProduct.id}
                  removeFromCart={removeFromCartonClick}
                  product={getProductsStart(cartProduct.id)}
                  quantity={cartProduct.quantity}
                />
              )),
          )}
          <h4>
            Total &euro;
            {' '}
            {getTotalOfCart(cartItems[0].products).toFixed(2)}
          </h4>
        </CartItemsList>
      ) : (
        <EmptyCart>
          <H4>
            Your cart is empty, Please add items to take advantage of awesome
            deals!
          </H4>
          <FontAwesomeIcon size="6x" icon={faCartFlatbed} />
        </EmptyCart>
      )}
    </Container>
  );
};

export default CartItems;
