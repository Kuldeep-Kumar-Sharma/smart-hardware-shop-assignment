import styled from "styled-components";
import { Product } from "../../models";

import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions";
import { Dispatch } from "redux";

type OwnProps = {
  product?: Product;
  quantity: number;
};
export const Cart = (props: OwnProps) => {
  const dispatch: Dispatch<any> = useDispatch();
  return (
    <Container>
      {props.product &&
        <Card>
          <Img src={props.product.defaultImage} alt={props.product.name} />
          <CardBody>
            <h4>{props.product.name}</h4>
            <h4>X{props.quantity}</h4>
            <h4>Price: {props.quantity * props.product.price}</h4>
            <Button onClick={() => dispatch(removeFromCart(props.product))}>
              Remove
            </Button>
          </CardBody>
        </Card>
      }
    </Container>
  );
};

const Container = styled.div`
  word-wrap: normal;
  width: 80%;
  margin-left: 1%;
  word-break: break-all;
  white-space: normal;
  display: inline-block;
  border-radius: 10px;
`;

const Img = styled.img`
  width: 50%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const CardBody = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  font-size: 10px;
  padding: 10px;
  height:50px;
  width: 150px;
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
