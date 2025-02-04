import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is DevSangam?",
    answer: "DevSangam is a platform where developers can collaborate, learn, and grow together.",
  },
  {
    question: "How can I join DevSangam?",
    answer: "You can sign up for free by clicking the 'Get Started' button and creating an account.",
  },
  {
    question: "Is DevSangam free to use?",
    answer: "Yes, DevSangam offers free access to resources, events, and collaborations.",
  },
  {
    question: "Can I contribute to DevSangam?",
    answer: "Yes! We welcome contributions from developers, whether it’s through content, mentorship, or open-source projects.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg shadow-sm">
            <button
              className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 hover:bg-gray-200 text-left text-gray-900 font-medium rounded-lg"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-700 bg-white">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
