import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VelocityTicker = ({
  text = "Hello World Hello World",
  baseVelocity = 0.05,
  textStyle = {
    // fontFamily: "Manrope, sans-serif",
    fontSize: "120px",
    lineHeight: "1.5em",
    fontWeight: 700,
  },
  gap = 12,
  color = "#fffff",
}) => {
  const scrollerRef = useRef(null);
  const lastScrollY = useRef(0);
  const directionRef = useRef(1);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    let xPos = 0;
    const scroller = scrollerRef.current;

    const animate = () => {
      // Get current scroll position
      const scrollY = window.scrollY;

      // Determine scroll direction
      if (scrollY < lastScrollY.current) {
        directionRef.current = -1;
      } else if (scrollY > lastScrollY.current) {
        directionRef.current = 1;
      }
      lastScrollY.current = scrollY;

      // Calculate movement based on baseVelocity and scroll speed
      const scrollSpeed = Math.abs(scrollY - lastScrollY.current) * 0.01;
      const moveBy = (directionRef.current * baseVelocity + scrollSpeed) * 0.5;

      // Update position
      xPos += moveBy;

      // Wrap position
      if (xPos <= -25) {
        xPos = 0;
      } else if (xPos >= 0) {
        xPos = -25;
      }

      // Apply transform
      gsap.set(scroller, {
        x: `${xPos}%`,
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [baseVelocity]);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    userSelect: "none",
    ...textStyle,
  };

  const scrollerStyle: React.CSSProperties = {
    display: "flex",
    whiteSpace: "nowrap",
    willChange: "transform",
    userSelect: "none",
  };

  const spanStyle = {
    marginRight: `${gap}px`,
    color: color,
  };

  return (
    <div style={containerStyle}>
      <div ref={scrollerRef} style={scrollerStyle}>
        <span style={spanStyle}>{text}</span>
        <span style={spanStyle}>{text}</span>
        <span style={spanStyle}>{text}</span>
        <span style={spanStyle}>{text}</span>
      </div>
    </div>
  );
};

export default VelocityTicker;
