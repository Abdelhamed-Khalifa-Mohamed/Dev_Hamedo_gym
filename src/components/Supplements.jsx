import { Link } from 'react-router-dom';
import './components_css/Products.css';
import { products } from './Products';
import { useShoppingCart } from '../context/shoppingCart';
import useMobileCardReveal from './useMobileCardReveal';

function Supplements() {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    useMobileCardReveal();
    
    const supplementsProducts = products.filter(product => product.id >=12 && product.id <= 18 || product.id === 6 || product.id >= 29&& product.id <= 33 ); ;

    return (
        <div className="Supplements">
            <h1 style={{  color: "#e39f16",
                fontFamily: "'Segoe UI', system-ui, sans-serif",
                fontSize: "2.5rem",
                display: "flex",
                justifyContent: "center",
                fontWeight: "bold",




            }}>Supplements</h1>
            
            <div className="products-container">
                {supplementsProducts.map((product) => {
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
export default Supplements;