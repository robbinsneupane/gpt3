import React from "react";
import "./footer.css";
import gpt3logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3-footer section-padding">
      <div className="gpt3-footer-heading">
        <h1 className="gradient-text">
          Do you want to step into the future before others?
        </h1>
      </div>
      <div className="gpt3-footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3-footer-links">
        <div className="gpt3-footer-links-logo">
          <img src={gpt3logo} alt="logo" />
          <p>Rabins Neupane,&nbsp; All Rights Reserved</p>
        </div>
        <div className="gpt3-footer-links-div">
          <h4>Links</h4>
          <p> Overons</p>
          <p> Social Media</p>
          <p> Counters</p>
          <p> Contact</p>
        </div>
        <div className="gpt3-footer-links-div">
          <h4>Company</h4>
          <p> Privacy Policy</p>
          <p> Terms & Conditions</p>
          <p> Contact</p>
        </div>
        <div className="gpt3-footer-links-div">
          <h4>Get in Touch</h4>
          <p>675 Susie Hills, NY, 80202</p>
          <p>(810) 6061 50813</p>
          <p>info@gpt3.com</p>
        </div>
      </div>
      <div className="gpt3-footer-copyright">
        <p>&copy; 2022 Rabins.&nbsp; All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
