import styled from "styled-components";

export const Header = (): JSX.Element => {
    return (
        <Navbar>
          <Nav>Smart Hardware Shop</Nav>
        </Navbar>
    );
};

const Navbar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

const Nav = styled.li`
  float: left;

  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: #111;
  }
`;

