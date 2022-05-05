import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import Button from "../button/button.component";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ product }) => {
  const { name, price, quantity, imageUrl } = product;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(product);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name"></div>
      <div className="quantity">
        <span className="arrow" onClick={() => removeItemFromCart(product)}>
          &#60;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItemToCart(product)}>
          &#62;
        </span>
      </div>
      <div className="price">{price}</div>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
