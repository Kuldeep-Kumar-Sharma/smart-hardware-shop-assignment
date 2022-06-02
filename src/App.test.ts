import reducer from './redux/reducer';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: 'RANDOM', payload: 'none' })).toEqual(
    {
      recommendations: [],
      queryProducts: [],
      cart: [
        {
          id: 0, // Fow now customet is always 0
          products: [],
        },
      ],
      loadingProducts: false,
      productsFetchingError: '',
    },
  );
});
