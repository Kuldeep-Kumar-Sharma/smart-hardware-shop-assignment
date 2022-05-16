import styled from "styled-components";
import { Product as ProductModel } from "../../models";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";
import { Dispatch } from "redux";


type OwnProps = {
  product: ProductModel;
};
export const Product = (props: OwnProps) => {
     const dispatch: Dispatch<any> = useDispatch();
 
  return (
    <Container>
        <Card>
          <Img src={props.product.defaultImage} alt={props.product.name} />
          <CardBody>
            <h4>{props.product.name}</h4>
            <Text>{props.product.description}</Text>
            <Text>Discount {props.product.discount + "%"}</Text>
            <Button onClick={() => dispatch(addToCart(props.product))}>
              EUR {" " + props.product.price + " "}Buy
            </Button>
          </CardBody>
        </Card>
    </Container>
  );
};

const Container = styled.div`
  word-wrap: normal;
  width: 22%;
  margin-left: 1%;
  word-break: break-all;
  white-space: normal;
  display: inline-block;
  border-radius: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const CardBody = styled.div`
  padding: 10px;
`;

const Text = styled.p`
  font-size: 10px;
`;

const Button = styled.button`
  font-size: 10px;
  padding: 10px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border: 0px;
  color: white;
  font-weight: bold;
  background: #f953c6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #f953c6,
    #b91d73
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #f953c6,
    #b91d73
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;