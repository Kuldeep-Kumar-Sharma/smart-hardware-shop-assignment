import styled from "styled-components";
import { Card, Button, Row,Col } from "react-bootstrap";
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
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={props.product.defaultImage} />
              <Card.Body>
                <Card.Title>{props.product.name}</Card.Title>
                <Card.Text>{props.product.description}</Card.Text>
                <Card.Text>Discount {props.product.discount + "%"}</Card.Text>
                <Button onClick={()=>dispatch(addToCart(props.product))} variant="primary">
                  EUR {" " + props.product.price + " "}Buy
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-left: 5%;
  margin-top: 3%;
`;
