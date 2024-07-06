import React, {useState} from 'react'
import Layout from '../../components/layout/layout';
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate} from "react-router-dom";

 const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();
   
  
    const handleBtn = async (e) => {
      e.preventDefault();
      try {
  
        const res = await axios.post(
          `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
          { email, newPassword,answer}
        );
  
        if(res.data.success){
    
            toast.success(res.data.message,{
              autoClose: "1000"
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
    <Layout title={"Forgot Password-EzCart"}>
     <div className="auth p-4">
       <div className="auth-container">
        <h3 className='pt-3'>Reset Password</h3>
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
            <label htmlFor="newPassword1" className="form-label">
               New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="newPassword1"
              value={newPassword}
              pattern=".{8}"
              title="Password must be at least 8 characters long."
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              required
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
              autoComplete='off'
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
            />
          </div>


          <button type="submit" className="btn btn-warning" onClick={handleBtn}>
            Reset Password
          </button>
        </form>
        </div>
      </div>
    </Layout>
  )
}


export default ForgotPassword;