import "./PropertyCard.css";

function PropertyCard({ property }) {
  return (
    <div className="property-card">

      <img
        src={property.image}
        alt={property.title}
      />

      <div className="property-info">

        <span className="property-type">
          {property.type}
        </span>

        <h3>{property.title}</h3>

        <p>{property.location}</p>

        <div className="property-details">

          <span>{property.size}</span>

          <span className="price">
            {property.price}
          </span>

        </div>

        <button>
          View Details
        </button>

      </div>

    </div>
  );
}

export default PropertyCard;