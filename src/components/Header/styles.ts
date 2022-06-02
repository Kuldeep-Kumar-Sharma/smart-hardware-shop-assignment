import styled from 'styled-components';

const Navbar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
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

const Nav = styled.li`
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-weight: bold;
`;

export { Navbar, Nav };
