import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidShoppingBag } from "react-icons/bi";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../form/searchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Avatar, Badge, Space } from "antd";

function Header() {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const [cart, setCart] = useCart();

  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });

    localStorage.removeItem("auth");
    setTimeout(() => {
      toast.success("Log Out successfully");
    }, 500);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          <BiSolidShoppingBag /> <span>EZ</span> CART
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <SearchInput />
            <li className="nav-item ">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </Link>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {categories?.map((c) => (
                  <li className="dropdown-item">
                    <Link className="nav-link" to={`/category/${c.slug}`}>
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {!auth.user ? (
              <>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {auth?.user?.name}
                  </Link>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/login"
                        className="dropdown-item"
                        onClick={handleLogOut}
                      >
                        Log Out
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </>
            )}

            <li className="nav-item">
              <NavLink to="/cart" className="nav-link cart">
                <FaShoppingCart />
                  <sup><Badge count={cart?.length} size="small"></Badge></sup>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
