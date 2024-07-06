import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [answer, setAnswer] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();


  const handleBtn = async (e) => {
    e.preventDefault();
    try {

      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address, answer }
      );

    

      if(res.data.success){
        toast.success(res.data.message,{
          autoClose: "1500"
        });

        setTimeout(()=>{
          navigate("/login");
        },2000)

      }
      else{
       toast.error(res.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Register-EZ Cart"}>
      <div className="auth p-4">
      <div className="auth-container">
        <h1>Sign Up</h1>
        <form className="pt-3 mt-3 mb-3" style={{ width: "85%" }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Email1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="Email1"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Password1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="Password1"
              value={password}
              pattern=".{8}"
              title="Password must be at least 8 characters long."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Phone1" className="form-label">
              Phone No.
            </label>
            <input
              type="tel"
              className="form-control"
              id="Phone1"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label" title="This answer will help you in reseting your password"  >
              What is your favourite sports ? <span style={{color: "red"}}>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="answer"
              value={answer}
              autoComplete="off"
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn btn-warning" onClick={handleBtn}>
            Submit
          </button>
        </form>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
