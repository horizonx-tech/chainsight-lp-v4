import theme from "../../constants/theme";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FaqItem = ({ question, answer }:{question: string, answer: string}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4 text-sm text-[#FAFAFA]">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-[#FAFAFA] text-base font-normal">{question}</h4>
        <motion.span 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-white text-xl"
        >
          {isOpen ? '−' : '+'}
        </motion.span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: 'auto',
              transition: {
                duration: 0.3,
                ease: "easeInOut"
              }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: {
                duration: 0.3,
                ease: "easeInOut"
              }
            }}
            className="overflow-hidden text-gray-300 text-sm"
          >
            <div className="pt-4">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const generalFaqs = [
    { 
      question: "What is shadcn/ui?", 
      answer: "Shadcn/ui is a collection of re-usable, accessible, and customizable React components that you can copy and paste into your projects." 
    },
    { 
      question: "What is shadcn/ui kit for Figma?", 
      answer: "It's a design resource that provides Figma components matching the React component library for consistent design and development." 
    },
    { 
      question: "I'm not familiar with shadcn/ui. Can I still use this kit?", 
      answer: "Yes! The components are designed to be beginner-friendly and come with extensive documentation to help you get started." 
    },
    { 
      question: "Can I create multi-brand design systems with this UI kit?", 
      answer: "Absolutely! The components are highly customizable, allowing you to adapt them to different brand styles and design requirements." 
    }
  ];

  const billingFaqs = [
    { 
      question: "What is the pricing?", 
      answer: "Pricing details can be found on our website. We offer flexible plans to suit different project needs." 
    },
    { 
      question: "Do you offer a free trial?", 
      answer: "Yes, we provide a limited free trial so you can explore the features before committing." 
    }
  ];

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div 
        className='w-full max-w-[85vw] rounded-xl my-5' 
        style={{backgroundColor:theme.colors.background.secondary}}
      >
        <div className="flex flex-col gap-3.5 md:flex-row p-6 md:p-14">
          <div className="flex flex-col flex-1 md:flex-[50%] gap-6 md:pr-10 mb-6 md:mb-0">
            <div className="text-[#A1A1AA] text-xs">FAQ Section</div>
            <h2 className="text-2xl md:text-3xl">Frequently asked questions</h2>
            <div className="flex">
              <p className="text-[#A1A1AA] text-sm font-sans gap-2 w-full md:w-[70%]">
                We've compiled the most important information to help you get the most out of your experience. Can't find what you're looking for? 
                <span className="text-white underline font-sans ml-1">
                  <a href="">Contact Us</a>
                </span>
              </p>
            </div>
          </div>
          <div className="flex-1 md:flex-[50%] space-y-4">
            <div>
              <h3 className="text-lg font-normal text-white mb-4">General</h3>
              <div className="rounded-lg">
                {generalFaqs.map((faq, index) => (
                  <FaqItem 
                    key={index} 
                    question={faq.question} 
                    answer={faq.answer} 
                  />
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-normal text-white mb-4">Billing</h3>
              <div className="rounded-lg text-[#FAFAFA]">
                {billingFaqs.map((faq, index) => (
                  <FaqItem 
                    key={index} 
                    question={faq.question} 
                    answer={faq.answer} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;