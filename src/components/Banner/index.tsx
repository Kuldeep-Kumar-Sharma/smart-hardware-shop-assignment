
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
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

  useEffect(() => {}, [dispatch, recommendations]);

    return recommendations && recommendations.length > 0 ? (
      <Container>
        <Carousel>
          {recommendations.map((recommendation) => (
            <Carousel.Item key={recommendation.id}>
                  <img
                      height="340px"
                className="d-block w-100"
                src={recommendation.defaultImage}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>{recommendation.name}</h3>
                <p>Price: {recommendation.price}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    ) : null;
};

const Container = styled.div`
  width: 50%;
  margin-left: 5%;
  margin-top: 3%;
`;
