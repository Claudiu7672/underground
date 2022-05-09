import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, quantity, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, product));
  const removeItemFromCartHandler = () =>
    dispatch(removeItemFromCart(cartItems, product));
  const addItemToCartHandler = () =>
    dispatch(addItemToCart(cartItems, product));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name"></div>
      <div className="quantity">
        <span className="arrow" onClick={removeItemFromCartHandler}>
          &#60;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={addItemToCartHandler}>
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
