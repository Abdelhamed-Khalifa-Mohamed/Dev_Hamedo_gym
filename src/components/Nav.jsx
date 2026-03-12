import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/shoppingCart';
import './components_css/Nav.css';




function  Nav() {
    const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

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

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavItemClick = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  const navClassName = `${scrolled ? "Navbar scrolled" : "Navbar"} ${!isMobile && scrolled ? "move-side" : ""} ${menuOpen ? "menu-open" : ""}`;


    return (
      

        <nav className={navClassName}>
                <button className="nav-toggle" type="button" aria-label="Toggle navigation menu" onClick={() => setMenuOpen((prev) => !prev)}>
                  <span className="nav-line"></span>
                  <span className="nav-line"></span>
                  <span className="nav-line"></span>
                </button>
                <ul className="nav-links">
        <li><Link to="/" onClick={handleNavItemClick}><img src="/Imges/Navpar/home.png" alt="Home Page" title="Home Page"/></Link></li>
        <li><Link to="/Offer_Page" onClick={handleNavItemClick}><img src="/Imges/Navpar/discount.png" alt="Offers" title="Special Offers"/></Link></li>
        <li><Link to="/showCaregories" onClick={handleNavItemClick}><img src="/Imges/Navpar/list.png" alt="Categories" title="Categories"/></Link></li>
        <li><Link to="/ConnectUs" onClick={handleNavItemClick}><img src="/Imges/Navpar/customer-service.png" alt="Contact Us" title="Contact Us "/></Link></li>
        <li>
          <Link className="bascketIcon" to="/shopping-basket" onClick={handleNavItemClick}><img src="/Imges/Navpar/basket.png" alt="Shopping basket" title="Shopping Basket"/></Link>


          <span className="basket-count">{cartItems.length}</span>
          

          </li>
        </ul>
        </nav>
    );
}

export default Nav;


