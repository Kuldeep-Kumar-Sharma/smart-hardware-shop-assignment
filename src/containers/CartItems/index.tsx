import styled from "styled-components";
import { Cart as CartModel, AppState, Product } from "../../models/index";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Cart } from "../../components/Cart";
import { removeFromCart } from "../../redux/actions";
import { Dispatch } from "redux";

export const CartItems = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const cartItems: readonly CartModel[] = useSelector(
    (state: AppState) => state.cart,
    shallowEqual
  );

  const products: readonly Product[] = useSelector(
    (state: AppState) => state.queryProducts,
    shallowEqual
  );

  const removeFromCartonClick = (cartItem?: Product) => {
    dispatch(removeFromCart(cartItem));
  };

  useEffect(() => {}, [cartItems]);

  const getProductsStart = (id: number) => {
    return products.find((prd) => prd.id === id);
  };
  return (
    <Container>
      {cartItems && cartItems.length > 0 ? (
        <>
          <h4>Cart Items</h4>
          {cartItems.map(
            (cartItem, index) =>
              cartItem.products &&
              cartItem.products.map((cartProduct, index) => (
                <Cart
                  key={index}
                  removeFromCart={removeFromCartonClick}
                  product={getProductsStart(cartProduct.id)}
                  quantity={cartProduct.quantity}
                />
              ))
          )}
        </>
      ) : (
        <h4>Empty</h4>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  overflow: auto;
  height: 400px;
  overflow: scroll;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
`;
