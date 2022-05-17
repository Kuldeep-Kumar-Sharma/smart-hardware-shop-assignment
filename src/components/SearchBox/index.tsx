import styled from "styled-components";

export const SearchBox = () => {
  return (
    <Container>
      <SearhInput
        type="text"
        placeholder="Search the products here..."
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-left: 5%;
  margin-top: 3%;
`;

const SearhInput = styled.input`
  color: transparent;
  font-family: Lato, sans-serif;
  font-size: 1.35em;
  padding: 0.35em;
  border: 1px solid transparent;
  border-radius: 0;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  width: 90vw;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  &:focus {
    border-bottom-color: #ccc;
    width: 50vw;
    color: #2b2b2b;
    cursor: default;
  }
`;
