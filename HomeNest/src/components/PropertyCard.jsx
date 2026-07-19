function PropertyCard({ property }) {
  const { title, location, size, price, image, purpose, bedrooms, bathrooms } = property;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-xs font-medium text-lime-600 bg-lime-100 px-2 py-1 rounded-full">
          {purpose}
        </span>
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
        <p className="text-gray-500 text-sm">{location}</p>
        <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
          <span>{size}</span>
          {bedrooms > 0 && <span>{bedrooms} Bed · {bathrooms} Bath</span>}
        </div>
        <p className="text-xl font-bold mt-3">₹{price.toLocaleString("en-IN")}</p>
      </div>
    </div>
  );
}

export default PropertyCard;