import React, {useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() =>{
      const interval = setInterval(() =>{
        setCount((preValue) => --preValue)
      },1000);

      count === 0 && navigate('/login',{
        state : location.pathname
      });
      return () => clearInterval(interval);
  },[count, navigate,location])
  return (
    <>
      <div className="d-flex  flex-column justify-content-center align-items-center" style={{height : "100vh"}}>
        <h2 className="Text-center">Redirecting to you in {count} second</h2>
        <div className="spinner-border" role="status">
        </div>
      </div>
    </>
  );
};

export default Spinner;
