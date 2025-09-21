// src/components/Footer.jsx
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import "./Footer.css"; // 👈 use external CSS for styling + responsiveness

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + About */}
        <div className="footer-section">
          <img src="/favicon.png" alt="Zenix Logo" className="footer-logo" />
          <p>
            We undertake projects as simple as Website Development or Brochure Designing
            to Complex Web Applications like CRM, E-commerce Development and App
            Development. We believe quality always speaks louder than words and thrive to
            deliver state-of-the-art technology in all the relative fields.
          </p>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>Web Development Services</li>
            <li>Chat Bots Services</li>
            <li>ERP Solutions</li>
            <li>Software Testing</li>
            <li>Offshore S/w Development</li>
            <li>Medical Coding Services</li>
          </ul>
        </div>

        {/* Address */}
        <div className="footer-section">
          <h3>Address</h3>
          <p>
            3rd Floor, Gunasitarama Residency, VV Nagar, Dilshuknagar,
            Hyderabad-500060.
          </p>
          <p>📞 +91 7671939740</p>
          <p>✉️ info@zenixdigital.com</p>

          {/* Social Icons */}
          <div className="footer-socials">
            <a href="https://wa.me/7671939740" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © 2025 Zenix Digital Solutions. All rights reserved.
      </div>
    </footer>
  );
}
