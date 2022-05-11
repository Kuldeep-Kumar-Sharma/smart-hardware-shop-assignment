import styled from "styled-components";
import { Product, AppState } from "../../models/index";
import { useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsStart } from "../../redux/actions";
import { Dispatch } from "redux";
import { Product as ProductComponent } from "../../components/Product";

export const ProductList = () => {
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(getProductsStart('abc'));
  }, [dispatch]);

  const products: readonly Product[] = useSelector(
    (state: AppState) => state.queryProducts,
    shallowEqual
  );

  useEffect(() => {}, [dispatch, products]);

  return products && products.length > 0 ? (
    <Container>
        {products.map((product) => (
          <ProductComponent product={product} />
        ))}
    </Container>
  ) : null;
};

const Container = styled.div`
  width: 50%;
  margin-left: 5%;
  margin-top: 3%;
`;
