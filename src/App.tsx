// MARK ==COMPONETS==
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { SearchBox } from "./components/SearchBox";
import { ProductList } from "./containers/ProductList";
import { CartItems } from "./containers/CartItems";
import styled from "styled-components";

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

const ROW = styled.div`
  display: flex;
  justify-content: stretch;
  flex-wrap: wrap;
  flex-direction: row;
`;

const COL = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export default App;
