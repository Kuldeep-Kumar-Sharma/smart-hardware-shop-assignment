import styled from 'styled-components';

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
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

const CardBody = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

const Text = styled.p`
    font-size: 10px;
    word-wrap: break-word;
    height: 30px;
    margin-bottom: 10px;
    margin-top: 5px;
`;

const DiscountRibbon = styled.div`
    height: 1em;
    width: 10em;
    border-style: dashed;
    border-color: #f953c6;
    color: #ac0000;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 5px;
    padding: 5px;
    border-radius: 20px;
    background-color: #b8b4b4;
`;

const Button = styled.button`
    font-size: 10px;
    padding: 10px;
    float: right;
    width: 180px;
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
    box-shadow: 0 2px #999;
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
  Container, Img, Card, CardBody, Text, DiscountRibbon, Button,
};
