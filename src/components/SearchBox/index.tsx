import styled from "styled-components";
import { Form } from "react-bootstrap";

export const SearchBox = () => {
  return (
    <Container>
      <Form.Control
        size="lg"
        type="text"
        placeholder="Search the products here..."
      />
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  margin-left: 5%;
  margin-top: 3%;
`;
