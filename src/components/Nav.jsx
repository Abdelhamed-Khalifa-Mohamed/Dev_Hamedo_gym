import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/shoppingCart';
import './components_css/Nav.css';




function  Nav() {
    const [scrolled, setScrolled] = useState(false);

    const { cartItems } = useShoppingCart();

  
useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


    return (
      

        <nav className={scrolled ? "Navbar scrolled move-side" : "Navbar"}>
                <ul className="nav-links">
        <li><Link to="/"><img src="/Imges/Navpar/home.png" alt="Home Page" title="Home Page"/></Link></li>
        <li><Link to="/Offer_Page"><img src="/Imges/Navpar/discount.png" alt="Offers" title="Special Offers"/></Link></li>
        <li><Link to="/showCaregories"><img src="/Imges/Navpar/list.png" alt="Categories" title="Categories"/></Link></li>
        <li><Link to="/ConnectUs"><img src="/Imges/Navpar/customer-service.png" alt="Contact Us" title="Contact Us "/></Link></li>
        <li>
          <Link className="bascketIcon" to="/shopping-basket"><img src="/Imges/Navpar/basket.png" alt="Shopping basket" title="Shopping Basket"/></Link>


          <span className="basket-count">{cartItems.length}</span>
          

          </li>
        </ul>
        </nav>
    );
}

export default Nav;


