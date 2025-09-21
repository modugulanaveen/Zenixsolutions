import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Zenix Digital Solutions</h1>
        <p>Professional Web Design, Chatbots, and UI/UX Solutions for Your Business</p>
        <Link to="/contact"><button>Get Started</button></Link>
      </section>

      <section className="container services">
        <div className="service-card">
          <h2>Web Design</h2>
          <p>Modern, responsive websites that work on all devices.</p>
        </div>
        <div className="service-card">
          <h2>Chatbots</h2>
          <p>AI-powered chatbots to automate your customer support.</p>
        </div>
        <div className="service-card">
          <h2>UI/UX</h2>
          <p>Beautiful and user-friendly interfaces for your apps and websites.</p>
        </div>
      </section>
    </div>
  );
}
