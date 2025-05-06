import { ReactNode } from "react";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <div className="relative flex items-center justify-center bg-[#00000] overflow-x-clip">
        <div className="hidden lg:flex absolute bg-transparent h-full w-[90vw] border-x-1 border-[#111827] -z-50 "></div>
        <div className="">
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};
