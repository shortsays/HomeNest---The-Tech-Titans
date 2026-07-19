import { useState } from "react";
import propertiesData from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";
import Testimonials from "../components/Testimonials";
import FAQAccordion from "../components/FAQAccordion";
import "../static/Properties.css";

function Properties() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Buy", "Rent", "Lease"];

  const filteredProperties =
    activeFilter === "All"
      ? propertiesData
      : propertiesData.filter((p) => p.purpose === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Explore Properties</h1>
      <p className="text-gray-500 mb-8">Find your perfect home from our verified listings</p>

      {/* Filter Tabs */}
      <div className="flex gap-3 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter
                ? "bg-lime-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No properties found for this filter.</p>
        )}
      </div>

      <Testimonials />
      <FAQAccordion />
    </div>
  );
}

export default Properties;