import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const facebookLink = "https://www.facebook.com/yourprofile";
  const instagramLink = "https://www.instagram.com/yourprofile";
  const whatsappNumber = "7671939740";
  const email = "modugulanaveen8@gmail.com";
  const phoneNumber = "+917671939740";

  const [formData, setFormData] = useState({
    name: "",
    emailInput: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", emailInput: "", message: "" });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-content">
        {/* Left Side: Contact Info */}
        <div className="contact-info">
          <p>
            <FaEnvelope className="icon" />{" "}
            <a href={`mailto:${email}`} className="contact-link">{email}</a>
          </p>
          <p>
            <FaPhone className="icon" />{" "}
            <a href={`tel:${phoneNumber}`} className="contact-link">{phoneNumber}</a>
          </p>
          <p>
            <FaWhatsapp className="icon" />{" "}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              Chat on WhatsApp
            </a>
          </p>

          <div className="socials">
            <a href={facebookLink} target="_blank" rel="noreferrer" className="social-link">
              <FaFacebook />
            </a>
            <a href={instagramLink} target="_blank" rel="noreferrer" className="social-link">
              <FaInstagram />
            </a>
          </div>

          <p className="help-text">
            We are ready to help you build your website or chatbot solution!
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="emailInput"
            placeholder="Your Email"
            value={formData.emailInput}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
