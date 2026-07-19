import "./About.css";
import AgentCard from "../components/AgentCard";
import agents from "../data/agents.json";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About HomeNest</h1>
        <p>
          HomeNest is committed to helping people find their dream homes with
          trust, transparency, and professional guidance.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">

        <div className="mission-box">
          <h2>Our Mission</h2>
          <p>
            To make buying, renting, and leasing properties simple,
            transparent, and stress-free by connecting customers with verified
            listings and trusted real estate experts.
          </p>
        </div>

        <div className="vision-box">
          <h2>Our Vision</h2>
          <p>
            To become the most trusted real estate platform where every family
            can confidently find their perfect home.
          </p>
        </div>

      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>

        <div className="agents-container">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

      </section>

      {/* Timeline */}
      <section className="timeline-section">

        <h2>Our Journey</h2>

        <div className="timeline">

          <div className="timeline-item">
            <span>2020</span>
            <p>HomeNest was founded with a vision to simplify real estate.</p>
          </div>

          <div className="timeline-item">
            <span>2021</span>
            <p>Successfully connected 500+ families with their dream homes.</p>
          </div>

          <div className="timeline-item">
            <span>2023</span>
            <p>Expanded services to include virtual property tours.</p>
          </div>

          <div className="timeline-item">
            <span>2025</span>
            <p>Recognized among the top trusted real estate agencies.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;