import { useShoppingCart } from "../context/shoppingCart";
import "./components_css/CartAlert.css";

function CartAlert() {
  const { cartAlertMessage, closeCartAlert } = useShoppingCart();

  if (!cartAlertMessage) {
    return null;
  }

  return (
    <div className="cart-alert" role="status" aria-live="polite">
      <span>{cartAlertMessage}</span>
      <button className="cart-alert-close" onClick={closeCartAlert} aria-label="Close alert">×</button>
    </div>
  );
}

export default CartAlert;