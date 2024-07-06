import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer bg-dark text-light p-2">
      <p className="text-center mt-2">
         &copy; 2023 EZ Cart |  All rights are reserved 
      </p>
      <p className="links text-center mt-2">
        <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
}

export default Footer;
