import styled from 'styled-components';

const Container = styled.div`
    word-wrap: normal;
    width: 260px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    word-break: break-all;
    white-space: normal;
    display: inline-block;
    border-radius: 10px;
`;

const Img = styled.img`
    width: 100px;
    height: 80px;
`;

const Card = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
`;

const CardBody = styled.div`
    padding: 2px;
    display: flex;
    flex-direction: column;
`;

const Text = styled.p`
    font-size: 10px;
    width: 190px;
    margin: 3px;
`;

const Button = styled.button`
    font-size: 1px;
    height: 20px;
    width: 100px;
    font-size: 8px;
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
    border-radius: 20px;
    &:hover {
        background-color: #3e8e41;
    }
    &:active {
        background-color: #3e8e41;
        box-shadow: 0 2px #666;
        transform: translateY(2px);
    }
`;

export {
  Container, Img, Card, CardBody, Text, Button,
};
