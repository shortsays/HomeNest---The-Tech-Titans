import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">

          <p className="hero-tag">
            Trusted Real Estate Platform
          </p>

          <h1>
            Find Your Dream Home
            <br />
            With HomeNest
          </h1>

          <p className="hero-description">
            Browse verified apartments, villas, plots, and commercial
            properties across the country. Experience hassle-free property
            buying, renting, and leasing with expert guidance.
          </p>

          <div className="hero-buttons">
            <Link to="/properties" className="primary-btn">
              Browse Properties
            </Link>

            <Link to="/contact" className="secondary-btn">
              Contact Agent
            </Link>

          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <h2>5K+</h2>
              <span>Verified Listings</span>
            </div>

            <div className="stat-card">
              <h2>2K+</h2>
              <span>Happy Clients</span>
            </div>

            <div className="stat-card">
              <h2>350+</h2>
              <span>Expert Agents</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;