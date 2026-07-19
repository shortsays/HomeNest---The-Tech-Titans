import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import FilterTabs from "../components/FilterTabs";

import properties from "../data/properties.json";
import Testimonials from "../components/Testimonials";
import FAQAccordion from "../components/FAQAccordion";

function Properties() {
  const [active, setActive] = useState("All");

  const filteredProperties =
    active === "All"
      ? properties
      : properties.filter((property) => property.type === active);

  return (
    <>
      <Navbar />

      <section className="properties-section">

        <div className="container">

          <h2 className="properties-title">
            Explore Our Properties
          </h2>

          <p className="properties-subtitle">
            Browse verified apartments, villas, commercial spaces, and plots
            available for buying, renting, and leasing.
          </p>

          <FilterTabs
            active={active}
            setActive={setActive}
          />

          <div className="property-grid">

            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}

          </div>

        </div>

      </section>
      <Testimonials />
      <FAQAccordion />
      <Footer />
    </>
  );
}

export default Properties;