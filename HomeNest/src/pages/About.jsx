import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AgentCard from "../components/AgentCard";

import agents from "../data/agents.json";

import "./About.css";

function About() {
  return (
    <>
      <Navbar />

      <section className="about-hero">

        <div className="container">

          <span>About HomeNest</span>

          <h1>
            Building Trust Through
            <br />
            Exceptional Real Estate Services
          </h1>

          <p>
            HomeNest is committed to making property buying, renting, and
            leasing simple, transparent, and secure through verified listings
            and experienced professionals.
          </p>

        </div>

      </section>

      <section className="mission-section">

        <div className="container mission-grid">

          <div className="mission-box">
            <h2>Our Mission</h2>

            <p>
              To connect people with verified properties while delivering
              transparent, trustworthy, and customer-focused real estate
              services.
            </p>
          </div>

          <div className="mission-box">
            <h2>Our Vision</h2>

            <p>
              To become India's most trusted digital real estate platform,
              empowering every customer with confidence.
            </p>
          </div>

        </div>

      </section>

      <section className="team-section">

        <div className="container">

          <h2 className="team-title">
            Meet Our Experts
          </h2>

          <p className="team-subtitle">
            Experienced professionals dedicated to helping you find the perfect property.
          </p>

          <div className="agent-grid">

            {agents.map((agent) => (
              <AgentCard
                key={agent.id}
                agent={agent}
              />
            ))}

          </div>

        </div>

      </section>

      <section className="timeline">

        <div className="container">

          <h2>Our Journey</h2>

          <div className="timeline-item">
            <h4>2018</h4>
            <p>HomeNest was founded with the vision of making property buying easier.</p>
          </div>

          <div className="timeline-item">
            <h4>2020</h4>
            <p>Expanded to more than 20 cities with thousands of verified listings.</p>
          </div>

          <div className="timeline-item">
            <h4>2023</h4>
            <p>Introduced virtual property tours and online consultations.</p>
          </div>

          <div className="timeline-item">
            <h4>2026</h4>
            <p>Serving over 50,000 happy customers across India.</p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;