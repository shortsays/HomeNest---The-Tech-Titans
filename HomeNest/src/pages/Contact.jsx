import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  date: "",
  propertyType: "",
  purpose: "",
  amenities: [],
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedAmenities = [...formData.amenities];

      if (checked) {
        updatedAmenities.push(value);
      } else {
        updatedAmenities = updatedAmenities.filter(
          (item) => item !== value
        );
      }

      setFormData({
        ...formData,
        amenities: updatedAmenities,
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

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
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.date) {
      newErrors.date = "Select a visit date";
    }

    if (!formData.propertyType) {
      newErrors.propertyType = "Select property type";
    }

    if (!formData.purpose) {
      newErrors.purpose = "Select purpose";
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

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
      setFormData(initialState);
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  const handleReset = () => {
    setFormData(initialState);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <>
      <Navbar />

      <section className="contact-section">
        <div className="container">

          <h2>Book a Site Visit</h2>

          <p>
            Fill out the form below and our property expert will contact you shortly.
          </p>

          {submitted ? (
            <div className="success-message">
              <h3>Thank You!</h3>
              <p>Your enquiry has been submitted successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>

              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <span>{errors.fullName}</span>}
              </div>

              <div className="input-group">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
              </div>

              <div className="input-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span>{errors.phone}</span>}
              </div>

              <div className="input-group">
                <label>Preferred Visit Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                {errors.date && <span>{errors.date}</span>}
              </div>

              <div className="input-group">
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
                {errors.propertyType && <span>{errors.propertyType}</span>}
              </div>

              <div className="input-group">
                <label>Purpose</label>

                <div className="radio-group">
                  <label><input type="radio" name="purpose" value="Buy" onChange={handleChange} checked={formData.purpose==="Buy"} /> Buy</label>

                  <label><input type="radio" name="purpose" value="Rent" onChange={handleChange} checked={formData.purpose==="Rent"} /> Rent</label>

                  <label><input type="radio" name="purpose" value="Lease" onChange={handleChange} checked={formData.purpose==="Lease"} /> Lease</label>
                </div>

                {errors.purpose && <span>{errors.purpose}</span>}
              </div>

              <div className="input-group">
                <label>Amenities</label>

                <div className="checkbox-group">
                  <label><input type="checkbox" value="Parking" onChange={handleChange} checked={formData.amenities.includes("Parking")} /> Parking</label>

                  <label><input type="checkbox" value="Gym" onChange={handleChange} checked={formData.amenities.includes("Gym")} /> Gym</label>

                  <label><input type="checkbox" value="Swimming Pool" onChange={handleChange} checked={formData.amenities.includes("Swimming Pool")} /> Swimming Pool</label>

                  <label><input type="checkbox" value="Garden" onChange={handleChange} checked={formData.amenities.includes("Garden")} /> Garden</label>
                </div>

                {errors.amenities && <span>{errors.amenities}</span>}
              </div>

              <div className="input-group">
                <label>Message</label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />

                {errors.message && <span>{errors.message}</span>}
              </div>

              <div className="button-group">
                <button type="submit">Submit</button>

                <button
                  type="button"
                  className="reset-btn"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;