'use client';

import { useState } from 'react';
import styles from './FAQAccordion.module.css';

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
    question: "Do I need to purchase the challenge to promote it?",
    answer: "No. Partners are not required to purchase the challenge in order to share it."
  },
  {
    question: "What happens after I apply?",
    answer: "You'll receive an email with next steps once your application is reviewed."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqAccordion}>
      {faqData.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <button
            className={styles.faqQuestion}
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            <span className={styles.faqIcon} aria-hidden="true">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className={styles.faqAnswer}>
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
