

import './components_css/Offer_Page.css';
import { useShoppingCart } from '../context/shoppingCart';
import { products } from './Products';
import { Link } from 'react-router-dom';


export default function OfferPage() {
  const { increaseCartQuantity } = useShoppingCart();


  const handleAddOfferToCart = (productIds) => { productIds.forEach((id) => increaseCartQuantity(id));

    const offerNames = productIds.map((id) => products.find((product) => product.id === id)?.name);

    alert(`${offerNames} added to cart`);
    
  };

  return (


  


    <>
    

    <header className="offer-header">
        <h2>Special Offers</h2>
        <p>Check out our latest discounts and promotions!</p>
      <Link to="/" className="back-home-btn">Back to Home</Link>
    </header>
    <div className="offer-container">
        <div className="offer-card">
        <img src="/Imges/Items Photos/61acI3kOwDL._AC_SX522_.jpg" alt="DY Nutrition Unflavoured Creatine Monohydrate Powder 300"/>
        <img src="/Imges/Page_Icon/plus.png" alt="" />
        <img src="/Imges/Items Photos/51I9DUSJlOL._AC_SY300_SX300_QL70_ML2_.jpg" alt="" />
        <p>Special Offer: Buy 2 For $42.98 on Creatine Monohydrate!</p>
        <button className='add-to-cart-btn' onClick={() => handleAddOfferToCart([1, 4])}>Add to Cart</button>
        </div>
        <div className="offer-card">
        <img src="/Imges/Items Photos/71R7hEDOLhL._AC_UL320_.jpg" alt="DY Nutrition Unflavoured Creatine Monohydrate Powder 300"/>
        <img src="/Imges/Page_Icon/plus.png" alt="" />
        <img src="/Imges/Items Photos/71pM8bIKf5L._AC_SL1500_.jpg" alt="" />
        <p>Special Offer: Buy 2 For $52.98</p>
        <button className='add-to-cart-btn' onClick={() => handleAddOfferToCart([3, 5])}>Add to Cart</button>

        </div>

    </div>

</>
  )
}