import React, { useState } from "react";
import "./WoodworkCompany.css";
import diningTable from "../images/dining-table.jpg";
import rusticBookshelf from "../images/rusticBookshelf.jpg";
import modernCabinet from "../images/modernCabinet.jpg";

import facebook from "../assets/facebook-brands-solid-full.svg";
import instagram from "../assets/instagram-brands-solid-full.svg";

const WoodworkCompany = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="woodwork-container">
      <header className="woodwork-header">
        <h1>Antique Woodworks</h1>
        <nav className={`woodwork-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </header>

      <section className="woodwork-hero">
        <h2>Crafting Timeless Wooden Pieces</h2>
        <p>
          From custom furniture to fine cabinetry, we bring your vision to life
          with precision and artistry.
        </p>
        <button className="cta-button" onClick={"/#"}>Request a Quote</button>
      </section>

      <section id="services" className="woodwork-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Custom Furniture</h3>
            <p>Handcrafted tables, chairs, and more tailored to your style.</p>
            <button className="learn-more" onClick={"/#"}>Learn More</button>
          </div>
          <div className="service-card">
            <h3>Cabinetry</h3>
            <p>Elegant kitchen and bathroom cabinets built to last.</p>
            <button className="learn-more" onClick={"/#"}>Learn More</button>
          </div>
          <div className="service-card">
            <h3>Restoration</h3>
            <p>Breathing new life into cherished wooden heirlooms.</p>
            <button className="learn-more" onClick={"/#"}>Learn More</button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="woodwork-section">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            Dining Table
            <img src={diningTable} alt="Dining Table" />
          </div>
          <div className="portfolio-item">
            Rustic Bookshelf
            <img src={rusticBookshelf} alt="Rustic Bookshelf" />
          </div>
          <div className="portfolio-item">
            Modern Cabinet
            <img src={modernCabinet} alt="Modern Cabinet" />
          </div>
        </div>
      </section>

      <section id="about" className="woodwork-section about">
        <h2>About Us</h2>
        <p>
          At Antique Woodworks, woodworking is more than a craft — it’s our passion.
          With decades of experience, we combine traditional techniques with
          modern design to create pieces that stand the test of time.
        </p>
      </section>

      <footer id="contact" className="woodwork-footer">
        <h2>Contact Us</h2>
        <p><a href="mailto:endalkfassil8@gmail.com">Email: info@antiquewoodworks.com</a></p>
        <p><a href="tel:+251900123456">Phone: +251-900-123-456</a></p>
        <p><a href="https://maps.app.goo.gl/HXGULUF6Z6Tkxjbi7" target="_blank" rel="noopener noreferrer">Location: 24 stadium, Ethiopia</a></p>
        <p>Follow us on <a href="https://www.facebook.com/antiquewoodworks" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" /></a> and <a href="https://www.instagram.com/antiquewoodworks" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" /></a></p>
      </footer>
    </div>
  );
};

export default WoodworkCompany;