import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate, Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import toast from "react-hot-toast";

const CartPage = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  //   remove cart item

  const removeCartItem = async (pid) => {
    try {
      let cartData = [...cart];
      let index = cartData.findIndex((item) => item._id === pid);
      cartData.splice(index, 1);
      setCart(cartData);
      localStorage.setItem("cart", JSON.stringify(cartData));
    } catch (error) {
      console.log(error);
    }
  };

  //   total Amount
  const totalAmount = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total;
    } catch (error) {
      console.log(error);
    }
  };

  // make payment 

  const makePayment = async () =>{
    try{

     await  axios.post(`${process.env.REACT_APP_API}/api/v1/auth/create-checkout-session`,{
      products : cart
     })
     .then((res) => {
      if(res.data.url){
        window.location.href = res.data.url;
      }
     })

     
    }catch(error){
      console.log(error);
    }
  }

  return (
    <Layout title={"EzCart - Cart"}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="text-center p-3 bg-light">
              {cart?.length > 0 ? `You have ${cart.length} items in your cart. ${
                    auth?.token ? "" : "please login to checkout"} `
                : "Your cart is Empty"}
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 bg-light mb-3">
            <div className="d-flex flex-wrap mb-4">
              {cart?.map((p) => (
                <div
                  className="card me-4 mt-4 flex-row"
                  style={{ width: "100%", height: "13rem" }}
                >
                  <Link
                    to={`/productDetails/${p.slug}`}
                    className="nav-link"
                    style={{ width: "30%" }}
                  >
                    <img
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                      className="img"
                      style={{ height: "13rem", width: "100%" }}
                      alt={p.name}
                    />
                  </Link>
                  <div className="card-body ps-5">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                    <p className="card-text">
                      <b>${p.price}</b>
                    </p>
                    <button
                      className="btn btn-light mt-3"
                      onClick={() => removeCartItem(p._id)}
                    >
                      remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

         {   
          cart && cart.length > 0 ? (
            <>
            <div className="col-md-4 ps-3">
            <h4 className="text-center pt-3">PRICE DETAILS</h4>
            <hr />
            <div className="card">
              <div className="card-body">
                <p className="card-text">Items : {cart?.length}</p>
                <p className="card-text">Total Amount : ${totalAmount()}</p>
                {auth?.user ? (
                  <button className="btn btn-primary w-100" onClick={makePayment}>Pay ${totalAmount()}</button>
                ) : (
                  <button className="btn btn-primary w-100" onClick={() => {toast.error("please login first") } }>Pay ${totalAmount()}</button>

                )}
              </div>
            </div>

            {auth?.user?.address ? (
              <>
                <div className=" mb-3 mt-3">
                  <h5>Current Address</h5>
                  <div className="d-flex mt-3">
                    <p>{auth?.user?.address}</p>
                    <CiEdit
                      className="edit ms-3"
                      onClick={() => navigate("/dashboard/user/profile")}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mb-3">
                  {auth?.token ? (
                    <button className="btn btn-primary"
                       onClick={() => navigate("/dashboard/user/profile")}>
                      Update Address
                    </button>
                  ) : (
                    <button className="btn btn-outline-danger mt-3"
                      onClick={() => navigate("/login", {
                        state : "/cart"
                      })}>
                      Please login first to checkout
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </>
          ) : (
            <>
               <div className="container text-center" style={{maxHeight : "100vh"}}>
                   <img  className = "img" src="/assets/empty cart img.png"/>
               </div>

          </>
          ) }
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
