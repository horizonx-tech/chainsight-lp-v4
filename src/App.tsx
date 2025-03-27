// import theme from "./constants/theme";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import Hero from "./components/main/Hero";
// import Sponsors from "./components/main/Sponsors";
import Highlights from "./components/sub/Highlights";
import Faq from "./components/main/Faq";

function App() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="hidden lg:flex absolute bg-transparent h-full w-[90vw] border-x-2 border-[#111827]"></div>
      <div className="relative">
        <Navbar/>
        <Hero/>
        {/* <Sponsors/> */}
        <Highlights/>
        <Faq/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
