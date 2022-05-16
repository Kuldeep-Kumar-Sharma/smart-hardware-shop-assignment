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
      <Row>
        {products.slice(0, 4).map((product, index) => (
          <ProductComponent key={index} product={product} />
        ))}
      </Row>
      <Row>
        {products.length > 4 && products
          .slice(4, products.length)
          .map((product, index) => (
            <ProductComponent key={index} product={product} />
          ))}
      </Row>
    </Container>
  ) : null;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2%;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Row = styled.div`
  flex-wrap:  wrap;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;