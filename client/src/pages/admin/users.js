import React from "react";
import Layout from "../../components/layout/layout";
import AdminMenu from "../../components/layout/adminMenu";

const Users = () => {
  return (
    <Layout title={"Dashboard- All users"}>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 mt-3 ps-5">
            <h1>Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
