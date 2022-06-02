import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Dispatch } from 'redux';
import { getProductsStart } from '../../redux/actions';
import { Product, AppState } from '../../models/index';
import ProductComponent from '../../components/Product';
import Loader from '../../components/Loader';

import { Container, Row, ErrorMessage } from './styles';

const ProductList = () => {
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(getProductsStart(''));
  }, [dispatch]);

  const products: readonly Product[] = useSelector(
    (state: AppState) => state.queryProducts,
    shallowEqual,
  );

  const isFetchingProducts: boolean = useSelector(
    (state: AppState) => state.loadingProducts,
    shallowEqual,
  );

  const errorMessage: string = useSelector(
    (state: AppState) => state.productsFetchingError,
    shallowEqual,
  );

  useEffect(() => {}, [dispatch, products]);

  return (
    <Container>
      {!isFetchingProducts
          && errorMessage === ''
          && products
          && products.length > 0 ? (
            <>
              <Row>
                {products.slice(0, 4).map((product) => (
                  <ProductComponent
                    key={product.id}
                    product={product}
                  />
                ))}
              </Row>
              <Row>
                {products.length > 4
                          && products
                            .slice(
                              4,
                              products.length >= 8 ? 8 : products.length,
                            )
                            .map((product) => (
                              <ProductComponent
                                key={product.id}
                                product={product}
                              />
                            ))}
              </Row>
            </>
        ) : (
          <Row>
            {isFetchingProducts ? (
              <Loader />
            ) : (
              <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
          </Row>
        )}
    </Container>
  );
};

export default ProductList;
