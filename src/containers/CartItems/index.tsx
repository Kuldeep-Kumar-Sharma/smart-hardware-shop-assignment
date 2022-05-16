import styled from "styled-components";
import { Cart as CartModel, AppState, Product } from "../../models/index";
import { useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";
import { Cart  } from "../../components/Cart";

export const CartItems = () => {
  const cartItems: readonly CartModel[] = useSelector(
    (state: AppState) => state.cart,
    shallowEqual
  );

  const products: readonly Product[] = useSelector(
    (state: AppState) => state.queryProducts,
    shallowEqual
  );

  useEffect(() => {}, [cartItems[0].products]);

  const getProductsStart = (id: number) => {
    return products.find((prd) => prd.id === id);
  };
  return (
    <Container>
      {cartItems && cartItems.length > 0 ? (
        <>
          <h4>Cart Items</h4>
          {cartItems.map((cartItem, index) =>
            cartItem.products.map((cartProduct, index) => (
              <Cart
                key={index}
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
  margin-top: 3%;
  width: 30%;
  float: right;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
