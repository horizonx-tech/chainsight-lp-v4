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
      question: "What is Chainsight?", 
      answer: "Chainsight is a next-generation platform that allows you to bring any data on-chain safely and easily. By leveraging advanced technologies like DKG, Chain-Key cryptography and zkTLS, we guarantee the authenticity and security of data. Users can obtain data from any data source on the web and build, manage, and monetize their own data solutions. Chainsight provides a comprehensive data solution that goes beyond just an oracle provider." 
    },
    { 
      question: "Who is Chainsight for?", 
      answer: "Chainsight is designed for anyone who wants to utilize data on the blockchain. Specifically: Developers and Project Teams: Those who want to integrate reliable data and advanced analytics into their DApps.Individual Users: Those who wish to obtain, manage, and analyze data themselves and monetize their data.Enterprises and Institutional Investors: Organizations that require high-quality, verifiable data and want to build their own data solutions." 
    },
    { 
      question: " Why are we building Chainsight?", 
      answer: "The current Web3 data environment faces many challenges, such as high costs, declining service quality, security risks, latency issues, and lack of transparency. Chainsight was built to solve these problems and to put the power of data back into the hands of users. By enabling users to obtain, manage, and monetize the data they need without relying on traditional oracle providers, we promote innovation and development across the entire blockchain ecosystem." 
    },
    { 
      question: "What types of data are available on Chainsight?", 
      answer: "On Chainsight, you can access a wide variety of data, including:Data from Any Web Source: Information obtained from any HTTPS endpoints, including long-tail asset prices, commodities (such as silver and oil), and indices like the S&P 500.Time-Series Data Analysis Results: Advanced analytics that include measurements of volatility, ratings, and trend indicators, such as Stablecoin Ratings.State from Other Blockchains: Retrieval of data across different blockchains.Custom Data Feeds: Unique data feeds created and shared by users, including examples like Time-Weighted Average Price (TWAP) and aggregated prices." 
    }
  ];

  const billingFaqs = [
    { 
      question: "Which networks does Chainsight support? Only EVMs?", 
      answer: "Chainsight supports various blockchain networks, focusing primarily on EVM (Ethereum Virtual Machine), SVM (Solana Virtual Machine), and Aptos MoveVM compatible chains. We are continuously expanding the networks we support and are considering non-EVM chains by evaluating technical requirements and business value. For the latest information on network support, please check our official announcement." 
    },
    { 
      question: "What’s the new compared with other oracle providers?", 
      answer: "Chainsight differs from traditional oracle providers in the following ways:User-Driven Data Acquisition: Users can access and manage the data they need without depending on specific oracles.Advanced Data Analytics: We offer on-chain time-series data analysis results, including metrics like volatility and ratings.Security and Verifiability: By utilizing advanced cryptographic technologies such as Chain-Key cryptography and zkTLS, we ensure the authenticity and security of the data.Modular Data Tools: Customize your data pipelines using flexible, modular tools akin to LEGO blocks for data.Data Monetization: Data providers can earn incentives, with further details to be announced later." 
    },
    { 
      question: "Why is it safe to access? How to verify that?", 
      answer: "Chainsight utilizes advanced cryptographic technologies, such as Chain-Key cryptography and zkTLS, to ensure data safety and authenticity. These technologies enable us to cryptographically verify that data has not been altered. Users can easily check the data on-chain and confirm its reliability and integrity through the user interface when needed." 
    },
    { 
      question: "We can’t find the data that I want. How can I create that?", 
      answer: "If you are unable to find the data you need, you can create it using Chainsight's Factory function. This feature allows you to independently source and deploy data on-chain. The Factory user interface simplifies the process of setting up data acquisition and deployment. Additionally, you can share the data feeds you create with the community, allowing other users to utilize them and earn incentives." 
    },

  ];

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div 
        className='w-full max-w-[90vw] md:max-w-[80vw] rounded-xl my-5' 
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
              <h3 className="text-lg font-normal text-white mb-4">Others</h3>
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