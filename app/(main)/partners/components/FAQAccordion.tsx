'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Who is this partnership best suited for?",
    answer: "This partnership is ideal for individuals and organizations who serve audiences interested in personal growth, emotional wellness, and self-leadership."
  },
  {
    question: "How are referrals tracked?",
    answer: "Each approved partner receives a unique referral link used to track registrations and purchases."
  },
  {
    question: "Do I need to enroll in the challenge or purchase the VIP upgrade to promote it?",
    answer: "No. Partners are not required to enroll or purchase anything. The Emotional Freedom Challenge is a free event, and you can share it without participating yourself."
  },
  {
    question: "What happens after I apply?",
    answer: "You'll receive an email with next steps once your application is reviewed."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="v2-faq">
      {faqData.map((faq, index) => {
        const answerId = `faq-answer-${index}`;
        const isOpen = openIndex === index;
        return (
          <div key={faq.question} className="v2-faq-item">
            <button
              className="v2-faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              <span>{faq.question}</span>
              <span className="v2-faq-icon" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <div id={answerId} className="v2-faq-answer" role="region">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
