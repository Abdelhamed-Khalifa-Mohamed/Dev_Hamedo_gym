
import { useEffect, useState } from "react"
import { Routes, Route ,useLocation} from "react-router-dom"
import Header from './components/Header'
import Nav from './components/Nav'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Footer from "./components/Footer"
import OfferPage from "./components/Offer_Page"
import ShoppingCartProvider from "./context/shoppingCart"
import ConnectUs from "./components/ConnectUs"
import ShowCategories from "./components/showCaregories"
import Supplements from "./components/Supplements"
import Vitamins from "./components/Vitamins"
import Proteins from "./components/Proteins"
import LoadingScreen from "./components/LoadingScreen"
import CartAlert from "./components/CartAlert"
import WelcomeIntro from "./components/WelcomeIntro"



function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {setIsLoading(false);}, 1500);

    return () => clearTimeout(timer);}, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (showWelcome) {
    return <WelcomeIntro onEnter={() => setShowWelcome(false)} />;
  }

  return (
  
  
  <ShoppingCartProvider>
    <CartAlert />
    
    {!location.pathname.startsWith("/product") 
    && !location.pathname.startsWith("/Offer_Page")

    &&!location.pathname.startsWith("/categories/Proteins")
    &&!location.pathname.startsWith("/categories/Vitamins")
    &&!location.pathname.startsWith("/categories/supplements")
     
  && <Header />}
    
    {!location.pathname.startsWith("/Offer_Page") && <Nav />}
    <Routes>

        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/shopping-basket" element={<Cart />} />
        <Route path="/Offer_Page" element={<OfferPage />} />
        <Route path="/ConnectUs" element={<ConnectUs />} />
        <Route path="/showCaregories" element={<ShowCategories />} />
        <Route path="/categories/supplements" element={<Supplements />} />
        <Route path="/categories/Vitamins" element={<Vitamins />} />
        <Route path="/categories/Proteins" element={<Proteins />} />
      
    </Routes>

    <Footer />
  

    </ShoppingCartProvider>
    
  )
}

export default App