import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const CategoryProduct = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params?.slug) getProductCat();
  }, [params?.slug]);

  const getProductCat = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container">
        <h4 className="text-center pt-3">Category - {category?.[0]?.name}</h4>
        <p className="text-center">{products?.length} products found</p>

        <div className="d-flex flex-wrap mb-4">
          {products?.map((p) => (
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
    </Layout>
  );
};

export default CategoryProduct;
