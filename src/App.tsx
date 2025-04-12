import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

// Main components
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import { ReactNode } from "react";

// Home page components
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

// Resources page
import Resources from "./components/main/Resources";
// Home page component
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
      <div className="hidden lg:flex absolute bg-transparent h-full w-[90vw] border-x-2 border-[#111827]"></div>
      <div className="">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

function ComingSoonPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-black border-t-2 border-[#111827] text-white px-4"  style={{ width: '100vw', maxWidth: '100%' }}>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
        🚧 Coming Soon
      </h1>
      <p className="text-[#A1A1AA] text-center max-w-md mb-8">
        We're working hard behind the scenes to bring you something amazing. Stay tuned!
      </p>
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