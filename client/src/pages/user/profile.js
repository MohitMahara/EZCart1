import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import UserMenu from "../../components/layout/userMenu";
import { useAuth } from "../../context/auth";
import axios from "axios";
import toast from "react-hot-toast";

const Profile = () => {
  const [auth, setAuth] = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  // get user data

  useEffect(() => {
    const { email, name, phone, address, password } = auth.user;
    setName(name);
    setEmail(email);
    setAddress(address);
    setPhone(phone);
    setPassword(password);
  }, [auth?.user]);

 

  const handleBtn = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/auth/profile`,
        { name, email, phone, address, password }
      );

      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({...auth, user : data?.updateUser});
        let ls = localStorage.getItem("auth")
        ls = JSON.parse(ls);
        ls.user = data.updateUser;
        localStorage.setItem("auth",JSON.stringify(ls));
        toast.success("Profile updated Successfully"); 
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9 mt-5">
            <div className="container">
              <h2 className="text-center">Update Profile</h2>
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
                    
                    disabled
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password1"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
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

                <button
                  type="submit"
                  className="btn btn-warning"
                  onClick={handleBtn}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
