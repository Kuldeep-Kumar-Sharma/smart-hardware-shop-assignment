import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: 'row';
    margin-left: 5%;
    margin-top: 3%;
`;

const Button = styled.button`
    border: none;
    display: flex;
    flex-direction: row;
    border-radius: 20px;
    height: 25px;
    width: 100px;
    padding: 5px;
    padding-left: 10px;
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

    &:after {
        content: '';
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
        padding-top: 10px;
        padding-left: 10px;
        opacity: 0;
        transition: all 0.8s;
    }

    &:active:after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s;
    }
`;

const SearchInput = styled.input`
    color: black;
    font-family: Lato, sans-serif;
    font-size: 1.35em;
    padding: 0.35em;
    border: 1px solid transparent;
    border-radius: 0;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    width: 70vw;
    &:focus {
        outline: none;
        box-shadow: none;
        border: 1px solid transparent;
        border-radius: 0 !important;
        border-bottom: 1px solid #f953c6 !important;
    }
`;

export { Container, Button, SearchInput };
