// import theme from "./constants/theme";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import Hero from "./components/main/Hero";
// import Sponsors from "./components/main/Sponsors";
import Highlights from "./components/sub/Highlights";
import Faq from "./components/main/Faq";
import Connect from "./components/sub/Connect";
import Subscription from "./components/main/Subscription";
import Features from "./components/main/Features";
import OracleInfo from "./components/main/OracleInfo";
import Testimonial from "./components/main/Testimonial";

function App() {
  return (
    <div className="relative flex items-center justify-center overflow-x-hidden max-w-screen">
      <div className="hidden lg:flex absolute bg-transparent h-full w-[90vw] border-x-2 border-[#111827]"></div>
      <div className="relative">
        <Navbar/>
        <Hero/>
        {/* <Sponsors/> */}
        <Highlights/>
        <Features/>
        <OracleInfo/>
        {/* <Usage/> */}
        <Testimonial/>
        <Subscription/>
        <Faq/>
        <Connect/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
