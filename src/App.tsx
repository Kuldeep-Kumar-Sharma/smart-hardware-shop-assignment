// MARK ==COMPONETS==
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { SearchBox } from "./components/SearchBox";
import { ProductList } from "./containers/ProductList";
import { CartItems } from "./containers/CartItems";


function App() {
  return (
    <>
      <Header />
      <CartItems/>
      <Banner />
      <SearchBox />
      <ProductList />
    </>
  );
}

export default App;
