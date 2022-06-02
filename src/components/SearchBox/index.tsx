import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { getProductsStart } from '../../redux/actions';

import {
  Container, Button, SearchInput,
} from './styles';

const SearchBox = () => {
  const [query, setQuery] = useState<string>('');
  const dispatch: Dispatch<any> = useDispatch();
  const searchTheProduct = () => {
    dispatch(getProductsStart(query));
  };

  return (
    <Container>
      <SearchInput
        onChange={(event) => setQuery(event.target.value)}
        type="text"
        placeholder="Search the products here..."
      />
      <Button onClick={() => searchTheProduct()}>
        Search
        <FontAwesomeIcon height={100} width={100} icon={faSearch} />
      </Button>
    </Container>
  );
};

export default SearchBox;
