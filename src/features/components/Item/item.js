import "./item.scss";
import shippingIcon from "../../../assets/ic_shipping.png";

const Item = ({ picture, title, price, free_shipping }) => (
  <div className="item-container">
    <img className="picture" src={picture} alt="itemPicture" />
    <div className="info-container">
      <div className="price-container">
        <p className="price">$ {price.amount}</p>
        {free_shipping && <img className="shipping-icon" src={shippingIcon} alt="freeShipping"/>}
      </div>
      <p className="title">{title}</p>
    </div>
  </div>
);

export default Item;