import { Link } from 'react-router-dom';
import './components_css/Products.css';
import { products } from './Products';
import { useShoppingCart } from '../context/shoppingCart';
import useMobileCardReveal from './useMobileCardReveal';

function Vitamins() {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    useMobileCardReveal();
    
    const vitaminsProducts = products.filter(product => product.id >= 7 && product.id <= 11);

    return (
        <div className="Vitamins">
            <h1 style={{  color: "#e39f16",
                fontFamily: "'Segoe UI', system-ui, sans-serif",
                fontSize: "2.5rem",
                display: "flex",
                justifyContent: "center",
                fontWeight: "bold",}}>Vitamins</h1>
            
            <div className="products-container">
                {vitaminsProducts.map((product) => {
                    const quantity = getItemQuantity(product.id);
                    return (
                        <div className="product-card mobile-reveal-card" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>

                            {quantity === 0 ? (
                                <button className="add-to-cart-btn" onClick={() => increaseCartQuantity(product.id)}>Add to Cart</button>
                            ) : (
                                <div className="quantity-controls">
                                    <button className="decrease-btn" onClick={() => decreaseCartQuantity(product.id)}>-</button>
                                    <span className="quantity">{quantity}</span>
                                    <button className="increase-btn" onClick={() => increaseCartQuantity(product.id)}>+</button>
                                    <button className="remove-btn" onClick={() => removeFromCart(product.id)}>Remove</button>
                                </div>
                            )}

                            <Link to={`/product/${product.id}`} className="view-details-link">View Details</Link>  
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default Vitamins;