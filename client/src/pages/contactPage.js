import React from "react";
import Layout from "../components/layout/layout";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const ContactPage = () => {
  return (
    <Layout title={"Contact-Us"}>
      <div className="container contact-container p-4">
        <h5 className="pb-3">
          EZ CART Help Center | 24x7 Customer Care Support
        </h5>
        <p>
          Thank you for choosing EZ CART. We value your feedback and are here to
          assist you. Whether you have a question, need support, or simply want
          to share your thoughts, we're ready to connect with you.For any
          assistance or inquiries related to your orders, products, or general
          questions, our customer support team is here to help.
        </p>
        <p>
          Email : <Link>maharamohit144@gmail.com</Link>
        </p>
        <p>Phone : 1234-1234-1234</p>

        <h6>Business Inquiries:</h6>
        <p>
          For business-related inquiries, partnerships, or collaborations,
          please reach out to our business development team.
        </p>

        <p>
          Email : <Link>ezcartbusiness144@gmail.com</Link>
        </p>

        <h6>Connect With Us:</h6>
        <p>
          Stay updated on the latest news, promotions, and product launches by
          connecting with us on social media.
        </p>
        <div className="iconsContainer pb-3">
          <Link>
            <FaFacebook />
          </Link>
          <Link>
            <FaInstagram />
          </Link>
          <Link>
            <RiTwitterXLine />
          </Link>
        </div>

        <h6>Feedback and Suggestions:</h6>
        <p>
          We appreciate your thoughts and suggestions. If you have any feedback
          that can help us improve, please share it with us at
          feedback@ezcart.com.
        </p>

        <h6>Visit Us:</h6>
        <div className="address">
          <p>EZ CART</p>
          <p> B-4/65, Tower #3, 5th Floor, Block B, Industrial Area</p>
          <p>Delhi, India</p>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
