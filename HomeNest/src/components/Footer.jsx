import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-about">

          <h2>
            Home<span>Nest</span>
          </h2>

          <p>
            HomeNest helps you discover verified properties, trusted real estate
            agents, and seamless property buying, renting, and leasing
            experiences.
          </p>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaTwitter />
            </a>
          </div>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Properties</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

        </div>

        <div className="footer-links">

          <h3>Services</h3>

          <ul>
            <li>Buy Property</li>
            <li>Rent Property</li>
            <li>Lease Property</li>
            <li>Home Loans</li>
          </ul>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>Email</p>
          <span>support@homenest.com</span>

          <p>Phone</p>
          <span>+91 9876543210</span>

          <p>Location</p>
          <span>Noida, Uttar Pradesh, India</span>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 HomeNest. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;