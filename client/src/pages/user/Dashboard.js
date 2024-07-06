import React from "react";
import Layout from "../../components/layout/layout";
import UserMenu from "../../components/layout/userMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard-EzCart"}>
      <div
        className="container-fluid p-3 bg-light "
        style={{ minHeight: "100vh" }}
      >
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>

          <div className="col-md-9 mt-5">
            <form className="p-3" style={{ background: "#fff" }}>
              <fieldset disabled>
                <legend className="pb-3 text-center"><b>Personal Information</b></legend>

                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <p className="form-control bg-light">{auth?.user?.name}</p>
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <p className="form-control bg-light">{auth?.user?.email}</p>
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <p className="form-control bg-light">{auth?.user?.phone}</p>
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <p className="form-control bg-light">{auth?.user?.address}</p>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
