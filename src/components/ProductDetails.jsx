import { useParams } from "react-router-dom"
import { products } from "./Products"
import { useShoppingCart } from '../context/shoppingCart'
import './components_css/ProductsDetails.css'

function ProductDetails() {

const { id } = useParams()
const { increaseCartQuantity } = useShoppingCart()

const product = products.find((item) => item.id === Number(id))



return (
    <div className="product-details-container">
        <img src={product.image} alt={product.name} className="product-image"/>

        <div className="product-details">

                <h2 className="product-name">{product.name}</h2>
                <p className="product-details-text">{product.details}</p>
                <p className="product-price">Price: ${product.price}</p>
                <button className="add-to-cart-btn" onClick={() => increaseCartQuantity(product.id)}>Add to Cart</button> 


        </div>
        


    </div>
    
);
}

export default ProductDetails