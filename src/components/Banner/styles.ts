import styled from 'styled-components';

const Container = styled.div`
  width: 800px;
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Slides = styled.div`
    display: flex;
    flex-direction: row;
`;

const Img = styled.img`
  vertical-align: middle;
  border-radius: 0px;
  width: 60px;
  height: 60px;
`;

const SlideshowContainer = styled.div`
    width: 100%;
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
`;

const Text = styled.p`
  color: red;
  font-weight: bold;
  font-size: 15px;
  padding: 1px 2px;
  background-color: #b8b4b4;
  text-align: center;
  border-style: dashed;
  border-color: #f953c6;
  color: #ac0000;
  font-weight: bold;
`;

const NumberText = styled.p`
  color: red;
  font-weight: bold;
  font-size: 15px;
  padding: 1px 2px;
  background-color: #b8b4b4;
  text-align: center;
  border-style: dashed;
  border-color: #f953c6;
  color: #ac0000;
  font-weight: bold;
  border-radius: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export {
  Container,
  NumberText,
  Text,
  SlideshowContainer,
  Img,
  Slides,
};
