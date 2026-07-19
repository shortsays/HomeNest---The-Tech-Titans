import { useState } from "react";
import "./FAQAccordion.css";

const faqData = [
  {
    question: "How do I schedule a property visit?",
    answer:
      "You can schedule a visit by filling out the enquiry form on our Contact page or by contacting one of our agents directly."
  },
  {
    question: "Are all properties verified?",
    answer:
      "Yes. Every property listed on HomeNest is verified by our team before it is published."
  },
  {
    question: "Do you provide home loan assistance?",
    answer:
      "Yes. We partner with leading banks and financial institutions to help you get the best home loan offers."
  },
  {
    question: "Can I rent commercial properties?",
    answer:
      "Yes. HomeNest offers residential and commercial properties for buying, renting, and leasing."
  }
];

function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-section">
      <div className="container">

        <h2 className="faq-title">
          Frequently Asked Questions
        </h2>

        <p className="faq-subtitle">
          Everything you need to know before buying, renting or leasing a property.
        </p>

        <div className="faq-container">

          {faqData.map((faq, index) => (

            <div
              className="faq-item"
              key={index}
            >

              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >

                <span>{faq.question}</span>

                <span>
                  {activeIndex === index ? "−" : "+"}
                </span>

              </button>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQAccordion;