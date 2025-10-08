'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// TypeScript interface for FAQ data
interface FAQData {
  id: number;
  question: string;
  answer: string;
}

// Sample FAQ data
const faqsData: FAQData[] = [
  {
    id: 1,
    question: "We blend art with analytics, using behavioral insights?",
    answer: "Yes, we combine creative design with data-driven insights to create experiences that are not only visually appealing but also highly effective in achieving business goals. Our approach uses behavioral analytics, A/B testing, and user research to inform every design decision, ensuring optimal user engagement and conversion rates."
  },
  {
    id: 2,
    question: "We blend art with analytics, using behavioral insights?",
    answer: "Our process involves collecting user behavior data, analyzing interaction patterns, and applying psychological principles to design interfaces that naturally guide users toward desired actions. We use heat mapping, user journey analysis, and predictive modeling to create personalized experiences that resonate with your target audience."
  },
  {
    id: 3,
    question: "We blend art with analytics, using behavioral insights?",
    answer: "We measure success through multiple metrics including conversion rates, user engagement time, bounce rates, and user satisfaction scores. Our analytics dashboard provides real-time insights into how users interact with your digital products, allowing for continuous optimization and improvement."
  },
  {
    id: 4,
    question: "We blend art with analytics, using behavioral insights?",
    answer: "Implementation typically takes 4-8 weeks depending on project complexity. We start with a comprehensive audit of your current systems, followed by strategy development, design creation, and finally implementation with ongoing monitoring and optimization to ensure maximum effectiveness."
  },
  {
    id: 5,
    question: "We blend art with analytics, using behavioral insights?",
    answer: "Our team consists of UX researchers, data analysts, behavioral psychologists, and creative designers who work together to deliver comprehensive solutions. We provide detailed reports, regular progress updates, and post-launch support to ensure your project's continued success."
  }
];

// Individual FAQ Item Component
interface FAQItemProps {
  faq: FAQData;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem = ({ faq, isOpen, onToggle, index }: FAQItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`border-1 rounded-2lg transition-all duration-300 ${isOpen
        ? 'border-stone-500 bg-stone-900'
        : 'border-gray-600/50 bg-stone-900 hover:border-stone-900'
        }`}
    >
      {/* Question Button */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 md:px-8 md:py-5 flex items-center font-light justify-between text-left group focus:outline-none focus:ring-2 focus:ring-red-600 rounded-2lg"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span className={`text-base md:text-lg font-light transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'
          }`}>
          {faq.question}
        </span>

        {/* Plus/Minus Icon */}
        <div className={`flex-shrink-0 ml-4 transition-all duration-300 ${isOpen ? 'text-red-600' : 'text-gray-400 group-hover:text-white'
          }`}>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-6 flex items-center justify-center"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </motion.div>
        </div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 md:px-8 md:pb-6">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent mb-5" />
              <p className="text-gray-300 text-sm font-light md:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Main FAQs Section Component
export default function FAQsSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(4); // 4th FAQ open by default to match your image

  const handleToggle = (faqId: number) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <section className="py-5 md:py-6 px-4 bg-gradient-to-bl from-red-950 via-stone-950 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8">
            FAQs
          </h1>
          <p className="text-stone-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Our Strategies help Business grow & to Exhibit themselves in the modern world.
          </p>
        </motion.div>

        {/* FAQs List */}
        <div className="space-y-2 md:space-y-2">
          {faqsData.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openFAQ === faq.id}
              onToggle={() => handleToggle(faq.id)}
              index={index}
            />
          ))}
        </div>


      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-30" />
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-blue-500 rounded-full animate-pulse opacity-20" />
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-pulse opacity-25" />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-30" />
      </div>
    </section>
  );
}