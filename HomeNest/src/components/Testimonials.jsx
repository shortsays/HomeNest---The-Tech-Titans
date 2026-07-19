import "./Testimonials.css";
import testimonials from "../data/testimonials.json";

function Testimonials() {
  return (
    <section className="testimonial-section">

      <div className="container">

        <h2 className="testimonial-title">
          What Our Clients Say
        </h2>

        <p className="testimonial-subtitle">
          Thousands of happy customers trust HomeNest for their property needs.
        </p>

        <div className="testimonial-grid">

          {testimonials.map((client) => (
            <div
              className="testimonial-card"
              key={client.id}
            >
              <img
                src={client.image}
                alt={client.name}
              />

              <h3>{client.name}</h3>

              <span>{client.designation}</span>

              <p>"{client.review}"</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;