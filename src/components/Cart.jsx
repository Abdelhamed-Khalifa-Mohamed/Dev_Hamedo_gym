import { useShoppingCart } from "../context/shoppingCart";
import { products } from "./Products";
import './components_css/Cart.css';

function Cart() {
  const { cartItems, removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();

  const getProductDetails = (id) => products.find(p => p.id === id);



  const total = cartItems.reduce((sum, item) => {
    const product = getProductDetails(item.id);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        <p className="empty-cart">Your cart is empty</p>
      </div>
    );
  }

  return (

    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => {
          
          const product = getProductDetails(item.id);
          return (
            <div className="cart-item" key={item.id}>
              <img src={product?.image} alt={product?.name} />
              <div className="item-details">
                <h3>{product?.name}</h3>
                <p>Price: ${product?.price.toFixed(2)}</p>
              </div>
              
              <div className="quantity-controls">
                <button onClick={() => decreaseCartQuantity(item.id)}>-</button>
                <span className="quantity">{item.quantity}</span>
                <button onClick={() => increaseCartQuantity(item.id)}>+</button>
              </div>
              <p className="item-total">${(product?.price * item.quantity).toFixed(2)}</p>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          );
        })}
      </div>
      <div className="cart-summary">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;










