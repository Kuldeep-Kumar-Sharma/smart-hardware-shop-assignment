import styled from 'styled-components';

const Container = styled.div`
    width: 300px;
    height: 400px;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
`;

const CartItemsList = styled.div`
    width: 100%;
    overflow: auto;
    height: 100%;
    overflow: scroll;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
`;

const Items = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const EmptyCart = styled.div`
    display: flex;
    color: gray;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const H4 = styled.h4``;

const Badge = styled.span`
    background: red;
    border-radius: 40px;
    color: #fff;
    font-size: 11px;
    margin-top: -20px;
    margin-left: -5px;
    z-index: -1;
    min-width: 15px;
    padding: 2px;
    text-align: center;
`;

export {
  Container, CartItemsList, Items, EmptyCart, H4, Badge,
};
