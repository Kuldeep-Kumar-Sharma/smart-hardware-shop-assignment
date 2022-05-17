import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Product, AppState } from "../../models/index";
import { useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecommendationsStart } from "../../redux/actions";
import { Dispatch } from "redux";

export const Banner = () => {
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(getRecommendationsStart());
  }, [dispatch]);

  const recommendations: readonly Product[] = useSelector(
    (state: AppState) => state.recommendations,
    shallowEqual
  );

  const slides: JSX.Element[] = [];
  
  useEffect(() => {
    recommendations.map((recommendation, index) =>
      slides.push(
        <Slides key={index}>
          <Img
            height="340px"
            className="d-block w-100"
            src={recommendation.defaultImage}
            alt="Second slide"
          />
          <Text>{recommendation.name}</Text>
          <NumberText>Price: {Math.round(recommendation.price)}</NumberText>
        </Slides>
      )
    );
  }, [slides,recommendations]);

 

  const [slide, setSlide] = useState<JSX.Element>(slides[0]);
  const [showIndex,setShowIndex] = useState<number>(0); 

     const showSlide = (index: number) => {
       return slides[index];
     };
    
    setInterval(() => {
      if (slides.length > 0) {
        setSlide(showSlide(showIndex));
        setShowIndex(showIndex + 1);
        if (showIndex >= slides.length) {
          setShowIndex(0);
        }
      }
    }, 10000);

  return recommendations && recommendations.length > 0 ? (
    <Container>
      <SlideshowContainer>
        {slide ? (
          slide
        ) : (
          <>
            <Loader />
            <h4>Fetching Recommmendations...</h4>
          </>
        )}
      </SlideshowContainer>
    </Container>
  ) : (
    <Container>
      <Loader />
    </Container>
  );
};

const Container = styled.div`
  width: 800px;
  margin-top: 3%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: ${spinAnimation} 2s linear infinite;
`;

const breatheAnimation = keyframes`
  from {opacity: .4} 
  to {opacity: 1}
`;
const Slides = styled.div`
  display: none
  animation-name: ${breatheAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;
const Img = styled.img`
  vertical-align: middle;
  width:100%;
`;

const SlideshowContainer = styled.div`
  width: 100%;
  position: relative;
  margin: auto;
`;
const Text = styled.p`
    color:red;
    font-weight: bold;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 24px;
    width: 100%;
    text-align: center;
`;

const NumberText = styled.p`
  color: red;
  font-weight: bold;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
`;
