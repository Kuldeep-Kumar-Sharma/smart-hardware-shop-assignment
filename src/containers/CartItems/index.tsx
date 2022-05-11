import styled from "styled-components";
import { Product, AppState } from "../../models/index";
import { useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";
import { Product as ProductComponent } from "../../components/Product";

export const CartItems = () => {
  
  const products: readonly Product[] = useSelector(
    (state: AppState) => state.cart,
    shallowEqual
  );

  useEffect(() => {}, [products]);

  return (
    <Container>
      {products && products.length > 0 ? (
        <>
          <h4>Cart Items</h4>
          {products.map((product) => (
            <ProductComponent product={product} />
          ))}
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
`;
