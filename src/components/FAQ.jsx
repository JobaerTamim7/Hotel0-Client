import React from "react";

const faqData = [
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your booking 24 hours before check-in for a full refund. After that, we charge a one-night cancellation fee.",
  },
  {
    question: "How do I make a reservation?",
    answer:
      "You can make a reservation directly on our website by selecting the room type and dates of your stay.",
  },
  {
    question: "Are pets allowed in the hotel?",
    answer:
      "We are pet-friendly! However, we have certain restrictions and additional fees for pets. Please contact us for more details.",
  },
  {
    question: "Is parking available at the hotel?",
    answer:
      "Yes, we offer free parking for all our guests. You can park your car in our on-site parking lot.",
  },
  {
    question: "Do you offer room service?",
    answer:
      "Yes, we provide 24/7 room service. You can order food and drinks from our in-room dining menu.",
  },
];

const FAQSection = () => {
  return (
    <section className="max-w-4xl mx-auto my-10 p-6 bg-base-100 rounded-lg shadow">
      <h2 className="text-3xl font-semibold text-center text-base-content mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow bg-base-200 border border-base-300"
          >
            <input type="checkbox" name={`faq-accordion`} className="peer" />
            <div className="collapse-title text-lg font-medium text-base-content">
              {faq.question}
            </div>
            <div className="collapse-content text-base-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
