import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Product as ProductModel } from '../../models';
import { addToCart } from '../../redux/actions';

import {
  Container,
  Img,
  Card,
  CardBody,
  Text,
  DiscountRibbon,
  Button,
} from './styles';

type OwnProps = {
    product: ProductModel
}
const Product = ({ product }: OwnProps) => {
  const dispatch: Dispatch<any> = useDispatch();

  return (
    <Container>
      <Card>
        <Img
          src={product.defaultImage}
          alt={product.name}
        />
        <CardBody>
          <h4>{product.name}</h4>
          <Text>{product.description}</Text>
          <DiscountRibbon>
            Save 🤑
            {`${product.discount}%`}
          </DiscountRibbon>
          <Button onClick={() => dispatch(addToCart(product))}>
            &euro;
            {` ${product.price} `}
            Buy
          </Button>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Product;
