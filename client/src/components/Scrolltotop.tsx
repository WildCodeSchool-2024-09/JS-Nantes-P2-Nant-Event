import { useCallback, useEffect, useState } from "react";
import "../styles/Scrolltotop.css";

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    const { scrollY } = window;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight;

    const progress =
      bodyHeight - windowHeight > 0
        ? (scrollY / (bodyHeight - windowHeight)) * 100
        : 0;

    setScrollProgress(progress);
    setIsVisible(scrollY > 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? "show" : "hide"}`}
      onClick={scrollToTop}
      type="button"
      aria-label="Scroll to top"
    >
      <div
        className="progress-circle"
        style={{
          background: `conic-gradient(#e6b504df ${scrollProgress}%, transparent 0%)`,
        }}
      >
        <div className="arrow-up" />
      </div>
    </button>
  );
};

export default ScrollToTopButton;
