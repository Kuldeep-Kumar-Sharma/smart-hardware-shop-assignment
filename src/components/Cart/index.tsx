import { Product } from '../../models';
import {
  Container, Img, Card, CardBody, Text, Button,
} from './styles';

type OwnProps = {
  product?: Product;
  quantity: number;
  removeFromCart: (product?:Product) => void;
};

const Cart = ({ product, quantity, removeFromCart }: OwnProps) => (
  <Container>
    {product && (
    <Card>
      <Img
        src={product.defaultImage}
        alt={product.name}
      />
      <CardBody>
        <Text>{product.name}</Text>
        <Text>
          X
          {quantity}
        </Text>
        <Text>
          Price: &euro;
          {quantity * product.price}
        </Text>
        <Button onClick={() => removeFromCart(product)}>
          Remove
        </Button>
      </CardBody>
    </Card>
    )}
  </Container>
);

export default Cart;
