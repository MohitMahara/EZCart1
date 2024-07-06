import React from "react";
import Layout from "../../components/layout/layout";
import { IoIosCheckmarkCircle } from "react-icons/io";
import {useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  setTimeout(() =>{
     navigate("/");
  }, 1500);

  return (
    <Layout>
    <div className="success container-fluid d-flex">
       <div className="container-fluid text-center bg-success d-flex" >
           <IoIosCheckmarkCircle className="bg-success payment-icon"/>
           <h1 className="pb-4" style={{color: "white"}}>Payment Success</h1>
       </div>
    </div>
    </Layout>
  );
}

export default Success;
