import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';

function Layout({ children, title, description, keywords, author }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keyword" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "90vh" }}>
        <Toaster 
         position = 'top-center'
        />
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "EZCart-Shop Now ",
  description: "ecommerce project",
  keywords: "MERN, React, HTML, CSS, JavaScript, Node ",
  author: "Mohit Mahara",
};

export default Layout;
