import { faqData } from "./FAQData";

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
