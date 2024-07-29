import React, { useContext } from "react";
import { BsBag } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import ProductsContext from "../../Contexts/ProductContext";
import "./Cart.css";
import products from "../../data/products";

export default function Cart() {
  const contextData = useContext(ProductsContext);
  return (
    <aside className={`${contextData.isShowCart ? "active" : ""} bag-sidebar `}>
      {" "}
      {/* add active class to show bag sidebar */}
      <h3 className="bag-title">
        <span>
          <BsBag />
          Bag
        </span>
        <span
          onClick={() => {
            contextData.setIsShowCart(false);
          }}
        >
          <AiOutlineClose className="close-icon" />
        </span>
      </h3>
      {contextData.userCart.map((product) => (
        <div className="row bag-wrapper" key={product.id}>
          <div className="col-12 mt-3">
            <div className="row align-items-center">
              <div className="col-3">
                <div className="d-flex flex-column">
                  <a href="#" className="btn btn-sm btn-danger">
                    Buy
                  </a>
                </div>
              </div>
              <div className="col-5">
                <div className="card-body d-flex justify-content-between align-items-center">
                  {/* <a href="#" className="btn btn-sm btn-outline-dark mt-3 text-capitalize">
          More Information
        </a> */}
                  <div className="d-flex flex-column">
                    <p className="card-text">{product.title}</p>
                    <div className="d-flex">
                      <p className="number">{product.count}</p>
                      <p className="price">{product.price}$</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="text-center">
                  <img src="/images/1.jpg" alt="Product Image" className="cart-img-top w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
}
