import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";


import Hero from "./components/main/Hero";
import Sponsors from "./components/main/Sponsors";
import Highlights from "./components/main/Highlights";
import Features from "./components/main/Features";
import OracleInfo from "./components/main/OracleInfo";
import Usage from "./components/main/Usage";
import Subscription from "./components/main/Subscription";
import Faq from "./components/main/Faq";
import Updates from "./components/main/Updates";
import Connect from "./components/main/Connect";

import Resources from "./components/main/Resources";
function HomePage() {
  return (
    <>
      <Hero />
      <Sponsors />
      <Highlights />
      <Features />
      <OracleInfo />
      <Usage />
      <Subscription />
      <Faq />
      <Updates />
      <Connect />
    </>
  );
}

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="relative flex items-center justify-center bg-[#00000] overflow-x-clip">
      <div className="hidden lg:flex absolute bg-transparent h-full w-[90vw] border-x-2 border-[#111827] -z-50 plus-container"></div>
      <div className="">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

function ComingSoonPage() {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen border-t-2 border-[#111827] text-white px-4"  style={{ width: '100vw', maxWidth: '100%' }}>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
        🚧 Coming Soon
      </h1>
      <p className="text-[#A1A1AA] text-center max-w-md mb-4">
        We're working hard behind the scenes to bring you something amazing. Stay tuned!
      </p>
      <button
        onClick={() => navigate('/')}
        className="text-sm flex items-center text-blue-500 justify-center gap-1 hover:underline transition-all"
      >
        <FaArrowLeft /> Back to Home
      </button>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <AppLayout>
            <HomePage />
          </AppLayout>
        } />
        <Route path="/Blog" element={
          <AppLayout>
            <Resources />
          </AppLayout>
        } />
        <Route path="/soon" element={
          <AppLayout>
            <ComingSoonPage />
          </AppLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;