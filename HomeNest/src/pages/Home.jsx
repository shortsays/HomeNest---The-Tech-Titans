import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import "../static/Home.css";

const features = [
  {
    icon: "🏠",
    title: "Verified Listings",
    desc: "Explore authentic and verified property listings."
  },

  {
    icon: "💰",
    title: "Home Loans",
    desc: "Easy financing solutions from trusted partners."
  },

  {
    icon: "🖥️",
    title: "Virtual Tours",
    desc: "Visit your dream home from anywhere."
  },

  {
    icon: "⚖️",
    title: "Legal Assistance",
    desc: "End-to-end documentation and legal support."
  }

];

const Home = () => {
  return (
    <>

      <Navbar />

      <Hero />

      <section className="features">

        <h2>Why Choose HomeNest?</h2>

        <div className="feature-grid">

          {features.map((feature, index) => (

            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
            />

          ))}

        </div>

      </section>

      <section className="benefits">

        <div className="container">

          <h2>Benefits of Choosing Us</h2>

          <div className="benefit-grid">

            <div>
              <h3>5000+</h3>
              <p>Properties Listed</p>
            </div>

            <div>
              <h3>1500+</h3>
              <p>Happy Families</p>
            </div>

            <div>
              <h3>120+</h3>
              <p>Expert Agents</p>
            </div>

            <div>
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
};

export default Home;