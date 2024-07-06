import React from "react";
import Layout from "../components/layout/layout";
import { Link } from "react-router-dom";

const PolicyPage = () => {
  return (
    <Layout title = {"Privacy Policy"}>
      <div className="container privacyContainer p-4">
        <h1 className="text-center pb-4">EZ CART Privacy Policy</h1>
        <h5 className="pb-3">Last updated: December 27, 2023.</h5>
        <p>
          Welcome to EZ CART! This Privacy Policy outlines how we collect, use,
          and protect the personal information you provide when using our
          website. At EZ CART, we are committed to protecting your privacy and
          ensuring a safe, enjoyable shopping experience. This Privacy Policy is
          designed to inform you about the types of personal information we
          collect, how we use it, and the measures we take to safeguard your
          data. By choosing to shop with EZ CART, you agree to the terms
          outlined in this Privacy Policy. We encourage you to review this
          policy carefully to understand how your information is handled. If you
          have any questions or concerns, please don't hesitate to contact us.
          At EZ CART, we understand the importance of your privacy and strive to
          maintain the trust you place in us. Our commitment to transparency and
          security is fundamental to the way we operate, and we continuously
          work to ensure that your personal information is handled responsibly.
        </p>
        <h5>Types of Data Collected:</h5>
        <p>
          We collect the following types of personal information when you
          register on our site:
        </p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>address</li>
          <li>Contact information</li>
          <li>IP address</li>
        </ul>
        <h5>How Data is Collected:</h5>
        <p>
          We collect data directly from users during the registration process.
          Additionally, we use cookies and similar technologies to enhance your
          shopping experience.
        </p>
        <h5>Purpose of Data Collection:</h5>
        <p>
          At EZ CART, we value your trust and are dedicated to enhancing your
          online shopping experience. We collect and store your personal
          information for the following purposes:
        </p>
        <ul>
          <li>
            <b>Order Processing and Fulfillment:</b>Your personal information is
            crucial for processing orders, ensuring accurate delivery, and
            providing you with the products and services you've selected.
          </li>

          <li>
            <b>Communication:</b> We use your contact details to communicate
            with you about your orders, products, and services. This includes
            order confirmations, shipping updates, and information about
            promotions and offers.
          </li>

          <li>
            <b>Payments: </b> To facilitate seamless transactions, we process
            your payment information securely, ensuring a smooth and secure
            checkout process.
          </li>

          <li>
            <b>Recommendations and Personalization: </b> Our goal is to tailor
            your shopping experience to your preferences. We use your personal
            information to recommend features, products, and services that align
            with your interests. This personalization enhances your overall
            satisfaction and makes your time with EZ CART more enjoyable.
          </li>

          <li>
            <b>Identifying Preferences:</b> By analyzing your interaction with
            our platform, we aim to identify your preferences and provide a
            curated shopping experience. This includes understanding the types
            of products you browse, purchase history, and other relevant
            behaviors.
          </li>

          <li>
            <b>Improving Services:</b>Your data helps us analyze trends, track
            user engagement, and gather insights into how our platform is used.
            This information is invaluable for continuously improving our
            services, making it easier for you to find and shop for the products
            you love.
          </li>
        </ul>

        <h5>Data Storage and Security:</h5>
        <p>
          Your data is stored securely, and we employ measures to protect it
          from unauthorized access. We store information in accordance with
          applicable data protection laws.We work to protect the security of
          your personal information during transmission by using encryption
          protocols and software.
        </p>
        <h5>User Rights:</h5>
        <p>
          We are dedicated to ensuring the accuracy and currency of your
          personal information within our processing systems. If you become
          aware of any inaccuracies in the personal information we process on
          your behalf, we encourage you to notify us promptly. Upon your
          notification, we will take necessary steps to rectify or erase the
          inaccurate information, considering the purposes for which it is
          processed. To empower you with control over your personal information,
          we provide accessible options on our platform. You may directly
          access, correct, and update your personal information using the
          functionalities available in the relevant sections of the platform.
          Additionally, you have the ability to delete non-mandatory information
          by navigating to the Profile and Settings sections on our website. For
          inquiries or requests, please contact us using the information
          provided below.
        </p>
   
        <h5>Contact Information:</h5>
        <p>For any privacy-related concerns, inquiries, or requests, please feel free to reach out to us at:</p>
         <p>Email: <Link>maharamohit144@gmail.com</Link></p>
         <p>We are committed to addressing your questions and concerns promptly.</p>
      </div>
    </Layout>
  );
};

export default PolicyPage;
