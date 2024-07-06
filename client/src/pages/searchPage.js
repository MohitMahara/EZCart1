import React from "react";
import Layout from "../components/layout/layout";
import { useSearch } from "../context/search";
import { Link } from "react-router-dom";

const SearchPage = () => {
    const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products found"
              : `Found ${values?.results.length} `}
          </h6>

          <div className="d-flex flex-wrap">
              {values?.results.map((p) => (
                <Link
                  to={`/dashboard/admin/product/${p.slug}`}
                  className="nav-link"
                >
                  <div
                    className="card me-4 mt-3"
                    style={{ width: "18rem", height: "25rem" }}
                  >
                    <img
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      style={{ height: "18rem" }}
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">
                        {p.description.substring(0, 30)}...
                      </p>
                      <p className="card-text">${p.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
