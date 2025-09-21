import React from "react";

export default function Services() {
  return (
    <div className="container">
      <h1>Our Services</h1>
      <div className="services">
        <div className="service-card">
          <h2>Web Design</h2>
          <p>Responsive websites with modern design and SEO-friendly structure.</p>
        </div>
        <div className="service-card">
          <h2>Chatbots</h2>
          <p>Automate your customer support with smart AI chatbots.</p>
        </div>
        <div className="service-card">
          <h2>UI/UX</h2>
          <p>Designing intuitive and attractive interfaces for web and mobile apps.</p>
        </div>
      </div>
    </div>
  );
}
