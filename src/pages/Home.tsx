import Hero from "../components/Hero";
import Section2 from "../components/Section2";
import PinSection from "../components/PinSection";
import AboutSection from "../components/AboutSection";
import Section3 from "../components/Section3";
import ImgScaleSection from "../components/ImgScaleSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import FormSection from "../components/FormSection";
import Blog from "../components/Blog";
import LastImg from "../components/LastImg";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default function Home() {
  useGSAP(() => {
    // Hero Parallax Animation
    gsap.to(".hero-bg", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-bg",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Pin Section
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".pin-section",
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    tl2.to(".text-pin1", {
      opacity: 0,
      filter: "blur(10px)",
      y: "-50px",
    });
    tl2.to(
      ".bg-img3",
      {
        opacity: 0,
      },
      "<"
    );
    tl2.to(
      ".text-pin2",
      {
        opacity: 1,
      },
      "<"
    );

    tl2.to(
      ".img-center-container",
      {
        y: "-400px",
      },
      "<"
    );

    tl2.to(".text-pin2", {
      opacity: 0,
      filter: "blur(10px)",
      y: "-50px",
    });
    tl2.to(
      ".bg-img2",
      {
        opacity: 0,
      },
      "<"
    );
    tl2.to(
      ".text-pin3",
      {
        opacity: 1,
      },
      "<"
    );

    tl2.to(
      ".img-center-container",
      {
        y: "-800px",
      },
      "<"
    );

    // Text Animation
    const headings = gsap.utils.toArray<HTMLElement>(".text-section h4");

    headings.forEach((heading) => {
      const splitText = new SplitType(heading, { types: "lines,words" });

      splitText.lines?.forEach((line: HTMLElement) => {
        if (!line || line.textContent?.trim() === "") return;

        Object.assign(line.style, {
          background: "linear-gradient(to left, #4D3D30 50%, #4D3D3033 50%)",
          backgroundSize: "200% 100%",
          color: "transparent",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          display: "inline-block",
          whiteSpace: "pre-wrap",
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".text-section",
          scrub: true,
          pin: true,
          pinSpacing: false,
          start: "top top",
          end: "+=200%",
        },
      });

      tl.to(splitText.lines, {
        backgroundPosition: "-100% 0%",
        duration: 1,
        stagger: 0.8,
        ease: "none",
      }).to(splitText.words ? splitText.words.slice(-2) : [], {
        color: "#FF5733",
        backgroundImage: "none",
      });
    });

    // Image Scale Animation
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".img-scale-section",
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    tl4
      .to(".img-scale", {
        scale: 1,
      })
      .to(".glass-card", {
        y: 0,
        duration: 1,
        ease: "power2.out",
      });

    // About Section Images Animation
    const aboutImagesTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-img-container",
        start: "top bottom",
        end: "center center",
        scrub: 1,
      },
    });

    aboutImagesTimeline.to(".first-img-left, .first-img-right", {
      clipPath: "inset(0 0 0% 0)",
      ease: "none",
    });

    const aboutImagesTimeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".second-img-container",
        start: "top bottom",
        end: "center center",
        scrub: 1,
      },
    });

    aboutImagesTimeline2.to(".second-img-left, .second-img-right", {
      clipPath: "inset(0 0 0% 0)",
      ease: "none",
    });
  }, []);

  return (
    <>
      <Hero />
      <Section2 />
      <PinSection />
      <AboutSection />
      {/* <Section3 /> */}
      <ImgScaleSection />
      <TestimonialsCarousel />
      <FormSection />
      <Blog />
      <LastImg />
    </>
  );
}
