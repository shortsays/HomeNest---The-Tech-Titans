import { useState } from "react";

const faqs = [
  {
    question: "How do I schedule a site visit?",
    answer: "You can fill out the enquiry form on our Contact page and our team will reach out to schedule a visit.",
  },
  {
    question: "Are the listings verified?",
    answer: "Yes, every property listed on HomeNest goes through a verification process before being published.",
  },
  {
    question: "Do you help with home loans?",
    answer: "Yes, we assist buyers in connecting with trusted loan partners for financing options.",
  },
  {
    question: "Can I list my own property?",
    answer: "Currently, listings are managed by our agency partners. Reach out via Contact page for more info.",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 bg-gray-50 font-medium flex justify-between items-center"
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-600 bg-white">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQAccordion;