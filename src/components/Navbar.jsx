import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <div className="social-icons">
        <a href="https://wa.me/7671939740" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://www.facebook.com/people/Modugula-Naveen/100072489515105/" target="_blank" rel="noreferrer"><FaFacebook /></a>
      </div>
      <nav className="navbar">
        <Link to="/"> Zenix Digital Solutions</Link>
        <div>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}
