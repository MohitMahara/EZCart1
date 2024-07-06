import axios from "axios";
import Layout from "../components/layout/layout";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [realatedProducts, setRealatedProducts] = useState([]);
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (params?.slug) getProducts();
  }, [params?.slug]);

  // get products
  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProducts(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //  get similar products

  const getSimilarProducts = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/realated-product/${pid}/${cid}`
      );
      setRealatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };


  //  buy now 

  const makePayment = async () =>{
    try{

     await  axios.post(`${process.env.REACT_APP_API}/api/v1/auth/create-checkout-session`,{
      products : [product]
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
    <Layout>
      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-md-5">
            <img
              src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
              className="card-img-top"
              style={{ height: "90vh" }}
              alt={product.name}
            />
          </div>
          <div className="col-md-7">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <div>
              <button
                className="btn btn-light mt-3 w-25 p-2"
                onClick={() => {
                  setCart([...cart, product]);
                  localStorage.setItem('cart', JSON.stringify([...cart, product]))
                  toast.success("Item added to cart");
                }}
              >
                Add to cart
              </button>
            </div>
            <div>
              <button className="btn btn-success mt-3 w-25 p-2" onClick={makePayment}>Buy Now</button>
            </div>

            <div className="mt-4">
              <h3>Rating & Reviews</h3>
            </div>
          </div>
        </div>

        <div className="row p-4">
          <h3>Similar Products</h3>
          <hr />
          {realatedProducts.length < 1 && (
            <p className="text-center">No similar product found</p>
          )}
          <div className="d-flex flex-wrap">
            {realatedProducts?.map((p) => (
              <div
                className="card me-4 mt-4"
                style={{ width: "18rem", height: "27rem" }}
              >
                <Link
                  to={`/dashboard/admin/product/${p.slug}`}
                  className="nav-link"
                >
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    style={{ height: "17rem" }}
                    alt={p.name}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                  <p className="card-text">
                    ${p.price}
                    <button
                      className="btn ms-5 btn-primary"
                      onClick={() => {
                        navigate(`/productDetails/${p.slug}`);
                      }}
                    >
                      More details
                    </button>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
