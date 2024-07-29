import React , {useContext} from "react";
import { BsBag } from "react-icons/bs";
import ProductsContext from "../../Contexts/ProductContext";
import "./Navbar.css"
export default function Navbar() {
  const contextData = useContext(ProductsContext)
  return (
    <div className="navbar navbar-navbar-expand-sm py-3 d-flex navbar-dark">
      <div className="container">
        <a href="#" className="navbar-brand">
          jeff shop
        </a>
        <ul className="navbar-nav me-auto ms-3">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
        </ul>
        <div className="bag-box" onClick={()=>{contextData.setIsShowCart(true)}}>
          <a href="#" className="bag">
            <BsBag className="text-white" />
            <span className="bag-products-counter">{contextData.cartCount}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
