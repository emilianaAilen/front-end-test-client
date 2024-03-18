import { Route, Routes } from "react-router-dom";

import { SearchBox } from "./features/components/SearchBox";
import SearchBoxWrapper from "./commons/components/SearchBoxWrapper/searchBoxWrapper";
import ItemsResult from "./features/components/ItemsResult/itemsResult";

function App() {
  return (
    <SearchBoxWrapper>
      <Routes>
        <Route path="/" element={ <SearchBox /> } />
        <Route path="/items" element={ <ItemsResult/> } />
        <Route path="/items/:id" element={ <div /> } />
      </Routes>
    </SearchBoxWrapper>
  );
}

export default App;
