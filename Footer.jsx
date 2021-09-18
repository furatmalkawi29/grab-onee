import React from "react";
import "./Footer.scss";
import SubscribeBanner from "../../components/SubscribeBanner/SubscribeBanner";
import nz from "../../assets/nz2.png";
import { TiSocialInstagram, TiSocialFacebook } from "react-icons/ti";
import {
  AiOutlineMobile,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

export default function Footer() {
  let subscribeHeading = `Sign up for our daily emails and we'll send you all the best deals, tailored for you.`;
  return (
    <footer>
      <h1 className="newsettler-header">Newsletter Signup</h1>

      <SubscribeBanner
        componentClass="footer-subscribe hide"
        headingClass="heading-class"
        heading={subscribeHeading}
      />

      <hr
        style={{
          backgroundColor: "rgb(224, 224, 224)",
          height: "1px",
          borderColor: "rgb(224, 224, 224)",
          width: "97%",
          border: "none",
          margin: "0px auto",
        }}
      />
      <div className="columns-container">
        <div className="social-media-block">
          <h2>Follow us on</h2>
          <div>
            <TiSocialFacebook />
            <AiOutlineTwitter />
            <TiSocialInstagram />
            <AiFillYoutube />
          </div>
          <p>Get app exclusive deals</p>
          <button>
            <AiOutlineMobile />
            Download our App
          </button>
        </div>

        <div className="footer-column">
          <h2>GrabOne</h2>
          <p>GrabOne Guarantee</p>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Terms & Returns</p>
          <p>Blog</p>
          <p>Gift Cards</p>
        </div>

        <div className="footer-column">
          <h2>My Account</h2>
          <p>My Account</p>
          <p>My Cart</p>
          <p>My Coupons</p>
          <p>FAQ</p>
        </div>
        <div className="footer-column">
          <h2>Merchants</h2>
          <p>Merchants</p>
          <p>Run a Deal</p>
          <p>Merchant Centre</p>
        </div>
        <div className="subscribe-section">
          <h1 className=" show-newsettler">Newsletter Signup</h1>

          <SubscribeBanner
            componentClass="footer-subscribe"
            headingClass="heading-class"
            heading={subscribeHeading}
          />
        </div>
      </div>

      <div className="copyright">
        <p>Privacy Policy</p>
        <p>&copy; 2021 GrabOne Limited</p>
        <img alt="nz" src={nz} />
      </div>
    </footer>
  );
}
