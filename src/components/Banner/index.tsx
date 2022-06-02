import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { useEffect } from 'react';
import { getRecommendationsStart } from '../../redux/actions';
import Loader from '../Loader';
import { Product, AppState } from '../../models/index';

import {
  Container,
  NumberText,
  Text,
  SlideshowContainer,
  Img,
  Slides,
} from './styles';

const Banner = () => {
  const recommendations: readonly Product[] = useSelector(
    (state: AppState) => state.recommendations,
    shallowEqual,
  );

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(getRecommendationsStart());
  }, [dispatch]);

  useEffect(() => {
  }, [recommendations]);

  return recommendations && recommendations.length > 0 ? (
    <>
      <h5>Amazing recommendations for you!!</h5>
      <Container>
        <SlideshowContainer>
          {recommendations
                      && recommendations.slice(0, 5).map((recommendation) => (
                        <Slides key={recommendation.id}>
                          <Img
                            className="d-block w-100"
                            src={recommendation.defaultImage}
                            alt="Second slide"
                          />
                          <Text>{recommendation.name}</Text>
                          <NumberText>
                            Price: &euro;
                            {' '}
                            {Math.round(recommendation.price)}
                          </NumberText>
                        </Slides>
                      ))}
        </SlideshowContainer>

        <SlideshowContainer>
          {recommendations
                      && recommendations.slice(5, 10).map((recommendation) => (
                        <Slides key={recommendation.id}>
                          <Img
                            className="d-block w-100"
                            src={recommendation.defaultImage}
                            alt="Second slide"
                          />
                          <Text>{recommendation.name}</Text>
                          <NumberText>
                            Price: &euro;
                            {' '}
                            {Math.round(recommendation.price)}
                          </NumberText>
                        </Slides>
                      ))}
        </SlideshowContainer>
      </Container>
    </>
  ) : (
    <Container>
      <Loader />
    </Container>
  );
};
export default Banner;
