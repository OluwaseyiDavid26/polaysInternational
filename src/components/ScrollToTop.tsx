import React from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-red-500 hover:bg-red-600 text-white w-14 h-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;
