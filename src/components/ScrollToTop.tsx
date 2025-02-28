import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll reset
    window.scrollTo(0, 0);

    // Force all scroll containers to top
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Handle Lenis
    const resetLenis = () => {
      if (window.lenis) {
        window.lenis.stop();
        window.lenis.scrollTo(0, { immediate: true });
        window.lenis.start();
      }
    };

    // Execute immediately and after a small delay to ensure it works
    resetLenis();
    setTimeout(resetLenis, 0);
  }, [pathname]);

  return null;
}
