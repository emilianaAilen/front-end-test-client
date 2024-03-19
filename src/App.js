import { Route, Routes } from "react-router-dom";

import { ItemDetail } from "features/itemDetail/components/ItemDetail";
import { ItemsResult } from "features/itemsResult/components/ItemsResult";
import { SearchBoxWrapper } from "features/common/components/SearchBoxWrapper";

function App() {
  return (
    <SearchBoxWrapper>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/items" element={<ItemsResult />} />
        <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </SearchBoxWrapper>
  );
}

export default App;
