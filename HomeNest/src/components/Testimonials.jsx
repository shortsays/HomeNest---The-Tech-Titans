import testimonialsData from "../data/testimonials.json";

function Testimonials() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonialsData.map((t) => (
          <div key={t.id} className="bg-gray-50 p-5 rounded-xl shadow-sm">
            <p className="text-gray-700 italic mb-3">"{t.quote}"</p>
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;