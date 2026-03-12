import { Link } from 'react-router-dom';
import './components_css/Products.css';
import { useShoppingCart } from '../context/shoppingCart';
import useMobileCardReveal from './useMobileCardReveal';


export const products = [
    {
    id: 1,
    name: "DY Nutrition Unflavoured Creatine Monohydrate Powder 300 g",
    price: 19.99,
    image: "/Imges/Items Photos/61acI3kOwDL._AC_SX522_.jpg",
    details: "DY Nutrition Unflavoured Creatine Monohydrate Powder 300 g is a high-quality supplement designed to support muscle growth and enhance athletic performance. This creatine monohydrate powder is unflavored, making it easy to mix with your favorite beverages or protein shakes. It provides a convenient way to increase your creatine levels, which can help improve strength, power, and endurance during workouts. Whether you're an athlete or a fitness enthusiast, this product can be a valuable addition to your supplement regimen."
    },
 
    {
    id: 2,
    name: "Nutrex Research Sports Nutrition Creatine Drive Muscle Building",
    price: 24.99,
    image: "/Imges/Items Photos/71R7hEDOLhL._AC_UL320_.jpg",
    details: "Nutrex Research Sports Nutrition Creatine Drive is a high-quality creatine supplement that supports muscle building and enhances athletic performance. It is formulated to deliver fast-acting creatine that helps increase strength, power, and endurance during workouts. This product is ideal for athletes and fitness enthusiasts looking to maximize their training results."
    },
    {
    id: 3,
    name: "Crea Power Creatine Monohydrate Powder | 400g | 80 Servings",
    price: 22.99,
    image: "/Imges/Items Photos/51I9DUSJlOL._AC_SY300_SX300_QL70_ML2_.jpg",
    details: "Crea Power Creatine Monohydrate Powder is a high-quality creatine supplement that supports muscle building and enhances athletic performance. It is formulated to deliver fast-acting creatine that helps increase strength, power, and endurance during workouts. This product is ideal for athletes and fitness enthusiasts looking to maximize their training results."
    },
    
    {
    id: 4,
    name: "Whole Grain Oats 500g | 100% Natural, Rich in Fiber & Protein",
    price: 27.99,
    image: "/Imges/Items Photos/71pM8bIKf5L._AC_SL1500_.jpg",
    details: "Whole Grain Oats 500g is a natural, high-quality oat product that is rich in fiber and protein. It is ideal for those looking to incorporate healthy grains into their diet for sustained energy and improved digestion."
    },

    {
    id: 5,
    name: "Growth Formula WG - Chocolate - 330g- 10 sachets",
    price: 19.99,
    image: "/Imges/Items Photos/71M2fycuQSL._AC_SL1500_.jpg",
    details: "Growth Formula WG - Chocolate - 330g- 10 sachets is a delicious and convenient way to support muscle growth and recovery. This chocolate-flavored formula is designed to provide essential nutrients that help build lean muscle mass and improve overall athletic performance."
    },
    {
    id: 6,
    name: "Max Muscle Leather Belt Brown - 120cm",
    price: 23.9,
    image: "/Imges/Items Photos/[6224009096381] Max Muscle Leather Belt Brown - 120cm.jpg",
    details: "Max Muscle Leather Belt Brown - 120cm is a high-quality weightlifting belt designed to provide support and stability during heavy lifting sessions. Made from durable leather, this belt helps protect the lower back and improve lifting performance by providing a secure fit and added support."  
    },
    {
    id: 7,
    name: "Now Foods Horny Goat Weed Extract 750mg-90Serv.-90Tabs.",
    price: 372.99,
    image: "/Imges/Items Photos/[733739047588] Now Foods Horny Goat Weed Extract 750mg-90Serv.jpg",
    details: "Now Foods Horny Goat Weed Extract is a natural supplement that supports healthy libido and overall wellness. It is formulated with high-quality ingredients to help enhance vitality and promote a balanced hormonal environment."
    },
    {
    id: 8,
    name: "Nutrex Research Lipo 6 Black Hers Ultra Concentrate-60Serv.-60Caps.",
    price: 12.99,
    image: "/Imges/Items Photos/[853237000721] Nutrex Research Lipo 6 Black Hers Ultra Concentrate-60Serv.jpg",
    details: "Nutrex Research Lipo 6 Black Hers Ultra Concentrate is a powerful fat-burning supplement designed specifically for women. It is formulated with high-quality ingredients to help boost metabolism, suppress appetite, and support weight loss goals."
    },
    {
    id: 9,
    name: "21st Century Sentry Multivitamin & Multimineral Supplement-100 Tablets",
    price: 17.99,
    image: "/Imges/Items Photos/[740985223802] 21st Century Sentry Multivitamin & Multimineral Supplement.jpg",
    details: "21st Century Sentry Multivitamin & Multimineral Supplement is a comprehensive multivitamin and multimineral formula that supports overall health and wellness. It is designed to provide essential vitamins and minerals needed for optimal body function."
    },
 
    {
    id: 10,
    name: "Muscle Rulz Zma-30Serv.-90Caps",
    price: 11.99,
    image: "/Imges/Items Photos/[854636008219] Muscle Rulz Zma-30Serv.jpg",
    details: "Muscle Rulz Zma is a high-quality zinc, magnesium, and vitamin B6 supplement that supports muscle recovery and sleep quality. It is formulated to help athletes and fitness enthusiasts maintain optimal mineral levels for peak performance."
    },
    {
    id: 11,
    name: "Organic Nation Biotin 10,000MCG Ultimate Hair Growth-60Serv.-60Tablets",
    price: 22.99,
    image: "/Imges/Items Photos/[6222023702387] Organic Nation Biotin 10,000MCG Ultimate Hair Growth-60Serv.jpg",
    details: "Organic Nation Biotin 10,000MCG Ultimate Hair Growth is a high-quality biotin supplement that supports healthy hair growth and strengthens hair follicles. It is formulated with organic biotin to provide essential nutrients for strong, healthy hair."
    },
    {
    id: 12,
    name: "Max Muscle Bag With Shoe Compartment-Red",
    price: 29.99,
    image: "/Imges/Items Photos/[6222023701199] Max Muscle Bag With Shoe Compartment-Red.jpg",
    details: "Max Muscle Bag With Shoe Compartment-Red is a high-quality bag designed for athletes and fitness enthusiasts. It features a shoe compartment for easy storage of footwear and is made from durable materials to withstand daily use."
    },
    {
    id: 13,
    name: "Novogen Pharma Shaker-700ml-Black",
    price: 11.99,
    image: "/Imges/Items Photos/[151085] Novogen Pharma Shaker-700ml-Black.jpg",
    details: "Novogen Pharma Shaker-700ml-Black is a high-quality shaker designed for mixing supplements and shakes. It features a secure lid and is made from durable materials to ensure long-lasting use."
    },
    {
    id: 14,
    name: "Max Muscle Backpack 45L-Dark Green",
    price: 192.99,
    image: "/Imges/Items Photos/[6222023704855] Max Muscle Backpack 45L-Dark Green.png",
    details: "Max Muscle Backpack 45L-Dark Green is a high-quality backpack designed for athletes and fitness enthusiasts. It features multiple compartments for easy organization of gear and is made from durable materials to withstand daily use."
    },
    {
    id: 15,
    name: "Max Muscle Knee Support",
    price: 19.99,
    image: "/Imges/Items Photos/[6224009096596] Max Muscle Knee Support.jpg",
    details: "Max Muscle Knee Support is a high-quality knee support designed for athletes and fitness enthusiasts. It provides stability and support for knees during workouts and daily activities."
    },
    {
    id: 16,
    name: "Optimum Nutrition T-Shirt xxl-Black",
    price: 9.99,
    image: "/Imges/Items Photos/[16011] Optimum Nutrition T-Shirt xxl-Black.jpg",
    details: "Optimum Nutrition T-Shirt xxl-Black is a high-quality t-shirt designed for athletes and fitness enthusiasts. It is made from durable materials and features a comfortable fit for all-day wear."
    },
    {
    id: 17,
    name: "Muscle Add Smart Shaker-550Ml.-Smoke Blue",
    price: 19.99,
    image: "/Imges/Items Photos/[6222023702509] Muscle Add Smart Shaker-550Ml.jpg",
    details: "Muscle Add Smart Shaker-550Ml.-Smoke Blue is a high-quality shaker designed for mixing supplements and shakes. It features a secure lid and is made from durable materials to ensure long-lasting use."
    },
    {
    id: 18,
    name: "Max Muscle Figure 8 lifting Straps-XL",
    price: 5.99,
    image: "/Imges/Items Photos/[6224009096725] Max Muscle Figure 8 lifting Straps-XL.jpg",
    details: "Max Muscle Figure 8 lifting Straps-XL are high-quality lifting straps designed for athletes and fitness enthusiasts. They provide secure grip and support during heavy lifting sessions."
    }


  ];

function Products() {

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  useMobileCardReveal();

  return (
    <div className="products-container">

      {products.map((product) => {

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

            <Link to={`/product/${product.id}`} className="view-details-link"> View Details</Link>  
          </div>
        );
      })}
    </div>
  );
  
}

export default Products;










