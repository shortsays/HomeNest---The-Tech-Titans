import { useState } from "react";
import "./Contact.css";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  visitDate: "",
  propertyType: "",
  purpose: "",
  amenities: [],
  message: "",
};

const amenitiesList = [
  "Parking",
  "Swimming Pool",
  "Garden",
  "Gym",
  "Security",
];

function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        amenities: [...formData.amenities, value],
      });
    } else {
      setFormData({
        ...formData,
        amenities: formData.amenities.filter(
          (item) => item !== value
        ),
      });
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
    }

    if (!formData.visitDate) {
      newErrors.visitDate = "Choose visit date";
    }

    if (!formData.propertyType) {
      newErrors.propertyType = "Select property type";
    }

    if (!formData.purpose) {
      newErrors.purpose = "Choose purpose";
    }

    if (formData.amenities.length === 0) {
      newErrors.amenities = "Select at least one amenity";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      setFormData(initialState);
    }
  };

  const handleReset = () => {
    setFormData(initialState);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section className="contact-page">
      <div className="contact-container">

        <h1>Schedule a Site Visit</h1>
        <p>
          Fill out the enquiry form and our property expert will contact you soon.
        </p>

        {submitted ? (
          <div className="success-box">
            <h2>🎉 Enquiry Submitted Successfully!</h2>
            <p>
              Thank you for contacting HomeNest. Our team will reach out shortly.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="btn"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <span className="error">{errors.fullName}</span>
              )}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="error">{errors.phone}</span>
              )}
            </div>

            <div className="form-group">
              <label>Preferred Visit Date</label>
              <input
                type="date"
                name="visitDate"
                value={formData.visitDate}
                onChange={handleChange}
              />
              {errors.visitDate && (
                <span className="error">{errors.visitDate}</span>
              )}
            </div>

            <div className="form-group">
              <label>Property Type</label>

              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Plot</option>
                <option>Commercial</option>
              </select>

              {errors.propertyType && (
                <span className="error">{errors.propertyType}</span>
              )}
            </div>

            <div className="form-group">
              <label>Purpose</label>

              <div className="radio-group">
                {["Buy", "Rent", "Lease"].map((item) => (
                  <label key={item}>
                    <input
                      type="radio"
                      name="purpose"
                      value={item}
                      checked={formData.purpose === item}
                      onChange={handleChange}
                    />
                    {item}
                  </label>
                ))}
              </div>

              {errors.purpose && (
                <span className="error">{errors.purpose}</span>
              )}
            </div>

            <div className="form-group">
              <label>Amenities</label>

              <div className="checkbox-group">
                {amenitiesList.map((item) => (
                  <label key={item}>
                    <input
                      type="checkbox"
                      value={item}
                      checked={formData.amenities.includes(item)}
                      onChange={handleCheckbox}
                    />
                    {item}
                  </label>
                ))}
              </div>

              {errors.amenities && (
                <span className="error">{errors.amenities}</span>
              )}
            </div>

            <div className="form-group">
              <label>Message</label>

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>

            <div className="button-group">
              <button type="submit" className="btn">
                Submit
              </button>

              <button
                type="button"
                className="btn reset-btn"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}

export default Contact;