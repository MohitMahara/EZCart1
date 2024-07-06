import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate,useLocation} from "react-router-dom";
import { useAuth } from "../../context/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
 
  const [auth, setAuth] = useAuth();

  const handleBtn = async (e) => {
    e.preventDefault();
    try {

      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );

    

      if(res.data.success){
  
          toast.success(res.data.message,{
            autoClose: "1000"
          });

          setAuth({
            ...auth,
            user : res.data.user,
            token : res.data.token
          })

          localStorage.setItem('auth', JSON.stringify(res.data));
  
          setTimeout(()=>{
            navigate(location.state || "/");
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
        <h1>Log in</h1>
        <form className="pt-3 mt-3 mb-3" style={{ width: "85%" }}>

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

          <button type="button" className="btn  mb-3" onClick={() =>{navigate('/forgot-password') }}>
            Forgot Password
          </button>

          <button type="submit" className="btn btn-warning" onClick={handleBtn}>
            Log in
          </button>
        </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
