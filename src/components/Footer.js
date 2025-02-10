import React from "react";
import { forwardRef } from "react";
import "../styles/Footer.css";

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="footer">
      <div className="footer-content">
        {/* Contact Section */}
        <div className="footer-contact">
          <h1>
            Let’s <span className="highlight">discuss<br></br></span> your <span className="highlight">vision</span> with us
          </h1>
        </div>

        {/* Address Section */}
        <div className="footer-address">
          <h2>CONTACT US</h2>
          <p>SP-40, RIICO Industrial Area, Delhi Road, <br></br><br></br>Kukas, Jaipur, Raj.(302028)</p>
          <p><a href="tel:+91 1234567890">+1 (555) 123-4567</a></p>
          <p><a href="mailto:example@gmail.com">creacy@hello.com</a></p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
