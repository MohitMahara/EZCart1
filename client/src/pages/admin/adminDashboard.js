import React from "react";
import Layout from "../../components/layout/layout"
import AdminMenu from "../../components/layout/adminMenu";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {

  const[auth] = useAuth();

  return <Layout title={"Dashboard- Ez Cart"}>
         <div className="container-fluid p-3">
            <div className = "row">
              <div className="col-md-3">
                 <AdminMenu/>
              </div>
              <div className="col-md-9 mt-5 ps-5">
                <div className="card w-75 p-3">
                  <h3> Name : {auth?.user?.name}</h3>
                  <h3> Email : {auth?.user?.email}</h3>
                  <h3>Contact No : {auth?.user?.phone}</h3>
                  <h3>Address : {auth?.user?.address}</h3>
                </div>
              </div>
            </div>
         </div>
        
  </Layout>;
};

export default AdminDashboard;
