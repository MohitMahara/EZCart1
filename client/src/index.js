import React from "react";
import reactDom from "react-dom/client";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth.js";
import { SearchProvider } from "./context/search.js";
import {CartProvider}  from "./context/cart.js";

const root = reactDom.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <SearchProvider>
     <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </CartProvider>
    </SearchProvider>
  </AuthProvider>
);
