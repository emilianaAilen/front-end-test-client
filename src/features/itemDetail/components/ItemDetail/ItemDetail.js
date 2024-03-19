import "./ItemDetail.styles.scss";

import { useEffect, useState } from "react";

import { getItemDetail } from "../../services/itemDetail";
import { setCategories } from "features/common/slice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const [itemData, setItemData] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { price, title, picture, description, sold_quantity, condition } =
    itemData || {};

  useEffect(() => {
    getItemDetail(id).then(({ item, categories }) => {
      setItemData(item);
      dispatch(setCategories(categories));
    });
  }, [id]);

  return itemData ? (
    <div className="item-detail">
      <div className="item-detail-container">
        <img className="picture" src={picture} alt="itemPicture" />
        <div className="info-container">
          <p className="condition-container">
            {condition} - {sold_quantity} vendidos
          </p>
          <h1 className="title">{title}</h1>
          <div className="price-container">
            <p>$ {price.amount.toLocaleString("es")}</p>
            <p className="decimals">
              {price.decimals}
              {price.decimals === 0 && 0}
            </p>
          </div>
        </div>
      </div>
      <div className="description-container">
        <p>Descripción del producto</p>
        <p className="description">{description}</p>
      </div>
    </div>
  ) : (
    <></>
  );
};

export { ItemDetail };
