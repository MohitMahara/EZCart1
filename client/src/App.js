import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import PolicyPage from "./pages/policyPage";
import PageNotFound from "./pages/pageNotFound";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/privateRoutes";
import ForgotPassword from "./pages/auth/forgotPassword";
import AdminRoute from "./components/Routes/adminRoute";
import AdminDashboard from "./pages/admin/adminDashboard";
import CreateCategory from "./pages/admin/createCategory";
import CreateProduct from "./pages/admin/createProduct";
import Users from "./pages/admin/users";
import Profile from "./pages/user/profile";
import Orders from "./pages/user/orders";
import Products from "./pages/admin/products";
import UpdateProduct from "./pages/admin/updateProduct";
import SearchPage from "./pages/searchPage";
import ProductDetails from "./pages/productDtls";
import CategoryProduct from "./pages/categoryProduct";
import CartPage from "./pages/cartPage";
import Success from "./pages/checkout/success";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productDetails/:slug" element={<ProductDetails />} />
        <Route path="/category/:slug" element = {<CategoryProduct/>} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element = {<CartPage/>} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Orders />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/products" element={<Products />} />
        </Route>
        <Route path ="/success" element={<Success/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
