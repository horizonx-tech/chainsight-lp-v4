import { BrowserRouter as Router, Routes, Route, useParams  } from "react-router-dom";

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
import Connect from "./components/main/Connect";

// Resources page
import Resources from "./components/main/Resources";
import AcademicPaper1 from "./components/sub/AcademicPaper1";
import AcademicPaper2 from "./components/sub/AcademicPaper2";
import AcademicPaper3 from "./components/sub/AcademicPaper3";
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
      {/* <Updates /> */}
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
    <div className="flex flex-col items-center justify-center w-full h-screen bg-black text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
        🚧 Coming Soon
      </h1>
      <p className="text-[#A1A1AA] text-center max-w-md mb-8">
        We're working hard behind the scenes to bring you something amazing. Stay tuned!
      </p>
    </div>
  );
}

function ResourcePage(){
  const { id } = useParams<{ id: string }>();
  switch(id){
    case "1":
       return <AcademicPaper1/>
    case "2":
      return <AcademicPaper2/>
    case "3":
        return <AcademicPaper3/>
  }
  return (
    <div className="resource-page-container">
      
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
        <Route path="/resources" element={
          <AppLayout>
            <Resources />
          </AppLayout>
        } />
        <Route path="/resources/:id" element={
          <AppLayout>
            <ResourcePage />
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