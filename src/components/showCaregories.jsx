import { Link } from 'react-router-dom';
import './components_css/ShowCategories.css'

function ShowCategories()
{
   return (
    <div className="showCatigori">
      <h1>Categories</h1>
      <ul>
        <li><Link to="/categories/supplements">Supplements</Link></li>
        <li><Link to="/categories/Proteins">Protein</Link></li>
        <li><Link to="/categories/Vitamins">Vitamins</Link></li>
      </ul>
    </div>  
   )
      

}
export default ShowCategories;