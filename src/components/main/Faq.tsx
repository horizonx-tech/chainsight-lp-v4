import theme from "../../constants/theme";
import { useState, JSX } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToElement } from "../../utils/functionalities";
const FaqItem = ({ question, answer }:{question: string, answer: string | JSX.Element}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4 relative text-sm text-[#FAFAFA]"
    onClick={() => setIsOpen(!isOpen)}
    >
      <div 
        className="flex justify-between items-center cursor-pointer "
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
      question: "Who owns the data in Web3?", 
      answer: "The data in Web3 is supposed to be owned by the users, but that’s not always the case. ChainSight is making sure data remains democratic and accessible for everyone." 
    },
    { 
      question: "What is an Oracle in Blockchain?", 
      answer: "An Oracle is an entity that connects blockchains to external systems through APIs. At ChainSight, users can bring any data on-chain without any coding skills." 
    },
    { 
      question: "What kind of data is available at ChainSight?", 
      answer: "ChainSight allows users to turn any internal API, public endpoint, or serverless function into an on-chain feed through Portal v1. Bring anything on-chain in just a few clicks." 
    },
    { 
      question: "Which networks is ChainSight available on?", 
      answer: <>Chainsight supports multiple blockchain networks, primarily EVM, SVM & Aptos MoveVM compatible chains. <a href="https://github.com/horizonx-tech/chainsight-management-oracle" target="_blank" rel="noopener noreferrer" className="text-blue-400 relative z-50 underline cursor-pointer">See list</a> for more.</>
    },
    { 
      question: "Why is ChainSight different from other oracle providers?", 
      answer: "Unlike most other oracle providers, ChainSight allows users to bring any data on-chain safely and easily, monetize their data, and use shared data feeds." 
    }
  ];


  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div 
        className='w-full max-w-[90vw] md:max-w-[80vw]  xl:max-w-screen-lg rounded-xl my-5' 
        style={{backgroundColor:theme.colors.background.secondary}}
      >
        <div className="flex flex-col gap-3.5 md:flex-row p-6 md:p-14">
          <div className="flex flex-col flex-1 md:flex-[50%] gap-6 md:pr-10 mb-6 md:mb-0">
            <div className="text-[#A1A1AA] text-xs">FAQ Section</div>
            <h2 className="text-2xl md:text-3xl">Frequently asked questions</h2>
            <div className="flex">
              <p className="text-[#A1A1AA] text-sm font-sans gap-2 w-full md:w-[70%]">
                We've compiled the most important information to help you get the most out of your experience. Can't find what you're looking for? 
                <span className="text-white underline font-sans ml-1 cursor-pointer relative" onClick={()=>scrollToElement("#Contact_Us")}>
                  Contact Us
                </span>
              </p>
            </div>
          </div>
          <div className="flex-1 md:flex-[50%] space-y-4">
            <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;