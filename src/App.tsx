import Navbar from "./components/Navbar";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";
import CustomCursor from "./components/shared/CustomCursor";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import AboutSection from "./components/AboutSection";
import FormSection from "./components/FormSection";
import Home from "./pages/Home";
import { useGSAP } from "@gsap/react";
import BlogPost from "./pages/BlogPost";
import ScrollToTop from "./components/ScrollToTop";

gsap.registerPlugin(ScrollTrigger);

const AppWrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 100%;
`;

function App() {
  useGSAP(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    window.lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const showAnim = gsap
      .from("nav", {
        yPercent: -100,
        duration: 0.2,
        ease: "none",
        paused: true,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
      },
    });

    return () => {
      window.lenis = undefined;
      lenis.destroy();
    };
  }, []);

  return (
    <AppWrapper>
      <Navbar />
      <ScrollToTop />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/gallery" element={<div>Gallery Page</div>} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<FormSection />} />
      </Routes>
      <Footer />
    </AppWrapper>
  );
}

export default App;
