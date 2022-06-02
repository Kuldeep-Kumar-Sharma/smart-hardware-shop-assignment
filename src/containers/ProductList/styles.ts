import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    margin-top: 2%;
    flex-wrap: wrap;
    flex-direction: column;
`;

const Row = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
    flex-direction: row;
`;

const ErrorMessage = styled.h4`
    color: red;
`;

export { Container, Row, ErrorMessage };
