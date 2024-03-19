import { useEffect, useState } from "react";

import { Item } from "../Item";
import { getItemsData } from "../../services/itemsResult";
import { setCategories } from "features/common/slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSearch } from "features/common/hooks/useSearch";

const ItemsResult = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { query } = useSearch();

  useEffect(() => {
    getItemsData(query).then((data) => {
      setItems(data?.items);
      dispatch(setCategories(data?.categories));
    });
  }, [query]);

  const handleShowDetail = (id) => {
    navigate(`/items/${id}`);
  };

  return (
    <div>
      {items?.map((item) => (
        <div key={item.id} onClick={() => handleShowDetail(item.id)}>
          <Item {...item}></Item>
        </div>
      ))}
    </div>
  );
};

export { ItemsResult };
