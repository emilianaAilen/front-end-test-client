import { useLocation } from "react-router-dom";
import { useSearch } from "../../../commons/hooks/useSearch";
import { useEffect } from "react";
import Item from "../Item/item";
import './itemsResult.scss';

const ItemsResult = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('search');

  const { results, handleSearch } = useSearch(query);

  useEffect(() => {
    handleSearch();
  }, [query]);

  return (
    <div className="items-container">
      {results.map((result) => (
        <Item {...result}></Item>
      ))}
    </div>
  );
};

export default ItemsResult;
