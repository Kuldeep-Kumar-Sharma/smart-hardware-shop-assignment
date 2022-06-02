import Header from './components/Header';
import Banner from './components/Banner';
import SearchBox from './components/SearchBox';
import ProductList from './containers/ProductList';
import CartItems from './containers/CartItems';

import {
  ROW,
  COL,
} from './App.style';

function App() {
  return (
    <>
      <Header />
      <COL>
        <ROW>
          <COL style={{ paddingLeft: 80 }}>
            <Banner />
          </COL>
          <COL style={{ paddingLeft: 50 }}>
            <CartItems />
          </COL>
        </ROW>
        <ROW>
          <SearchBox />
        </ROW>

        <ROW>
          <ProductList />
        </ROW>
      </COL>
    </>
  );
}

export default App;
