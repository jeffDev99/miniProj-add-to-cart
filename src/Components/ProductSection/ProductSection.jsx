import React from "react";
import { useContext } from "react";
import ProductsContext from "../../Contexts/ProductContext";
import "./ProductSection.css";
export default function ProductSection({ title, infos }) {
  const contextData = useContext(ProductsContext);
  const addToCart = (product) => {
    contextData.setIsShowToast(true);
    contextData.setIsShowCart(true);
    setTimeout(() => {
      contextData.setIsShowToast(false);
    }, 3000);
    let isInUserCart = contextData.userCart.some((bagProduct) => bagProduct.title === product.title);
    if (!isInUserCart) {
      let newUserCartProduct = {
        id: contextData.userCart.length + 1,
        title: product.title,
        price: product.price,
        count: 1,
      };
      contextData.setUserCart((prevProducts) => [...prevProducts, newUserCartProduct]);
    } else {
      let newUserCart = [...contextData.userCart];
      // newUserCart.some((bagProduct) => {
      //   if (bagProduct.title === product.title) {
      //     bagProduct.count++;
      //     return true;
      //   }
      // });
      // contextData.setUserCart(newUserCart)
      let newCart = newUserCart.map((bagProduct) => {
        if (bagProduct.title === product.title) {
          bagProduct.count++;
        }
        return bagProduct;
      });
      contextData.setUserCart(newCart);
    }
  };
  return (
    <>
      {contextData.allProducts.map((productSection) => (
        <div className="row justify-content-center mt-5" key={productSection.id}>
          <h3 className="text-center">{productSection.title}</h3>
          {productSection.infos.map((product) => (
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5" key={product.id}>
              <div className="card py-3 px-3">
                <div className="col-12 text-center">
                  <img src={product.img} alt="Product Image" className="card-img-top w-75" />
                </div>
                <div className="card-body text-center">
                  <p className="card-text">{product.title}</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="price">{product.price}$</p>
                    <p className="number">Number: {product.count}</p>
                  </div>
                  <hr />
                  <div className="d-flex flex-column ">
                    <a href="javascript:void(0)" className="btn btn-danger w-100" onClick={() => addToCart(product)}>
                      Add To Cart
                    </a>
                    <a href="#" className="btn btn-outline-dark mt-3 text-capitalize w-100">
                      More Information
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
