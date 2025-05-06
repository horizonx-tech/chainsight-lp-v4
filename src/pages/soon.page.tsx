import { AppLayout } from "../layout";
import { FaArrowLeft } from "react-icons/fa";

export const Page = () => {
  return (
    <AppLayout>
      <ComingSoonPage />
    </AppLayout>
  );
};

function ComingSoonPage() {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-screen border-t-2 border-[#111827] text-white px-4"
      style={{ width: "100vw", maxWidth: "100%" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
        🚧 Coming Soon
      </h1>
      <p className="text-[#A1A1AA] text-center max-w-md mb-4">
        We're working hard behind the scenes to bring you something amazing.
        Stay tuned!
      </p>
      <a
        href="/"
        className="text-sm flex items-center text-blue-500 justify-center gap-1 hover:underline transition-all"
      >
        <FaArrowLeft /> Back to Home
      </a>
    </div>
  );
}
