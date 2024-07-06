import React from "react";
import Layout from "../components/layout/layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={"Page Not Found"}>
      <div className="pgNotFound">
        <h1>
          404 <span>Error</span>
        </h1>
        <h2>Oops! Page Not Found</h2>
        <Link to="/" className="btn btn-warning">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
