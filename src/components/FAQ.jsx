const FAQSection = () => {
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
  return (
    <section className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="accordion">
        {faqData.map((faq, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-header">
              <input
                type="checkbox"
                id={`faq-${index}`}
                className="peer hidden"
              />
              <label
                htmlFor={`faq-${index}`}
                className="accordion-title bg-gray-200 text-lg font-medium p-4 cursor-pointer hover:bg-gray-300"
              >
                {faq.question}
              </label>
            </div>
            <div className="accordion-body p-4 bg-gray-50">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
