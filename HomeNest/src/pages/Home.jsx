import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import "../components/FeatureCard.css";
import Footer from "../components/Footer";

import {
  FaCheckCircle,
  FaHome,
  FaVideo,
  FaBalanceScale,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCheckCircle />,
    title: "Verified Listings",
    description:
      "Every property is verified by our experts for a safe buying and renting experience.",
  },
  {
    icon: <FaHome />,
    title: "Home Loans",
    description:
      "Easy financing options through trusted banking partners with competitive interest rates.",
  },
  {
    icon: <FaVideo />,
    title: "Virtual Tours",
    description:
      "Explore properties remotely through immersive virtual tours before scheduling visits.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Legal Assistance",
    description:
      "Complete documentation and legal support for a smooth property transaction.",
  },
];

function Home() {
  return (
    <>
      <Navbar />
      
      <Hero />

      <section className="features">
        <div className="container">

          <h2 className="section-title">
            Why Choose HomeNest
          </h2>

          <p className="section-subtitle">
            We simplify your property search with trusted listings,
            experienced agents, and complete end-to-end assistance.
          </p>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;