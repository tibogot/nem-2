import styled from "styled-components";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CursorStyled = styled.div`
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border-radius: 60px;
  position: fixed;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  color: white;
  z-index: 9999;
  border: 1px solid rgba(255, 255, 255, 0.2);
  opacity: 0;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
`;

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  let currentSection: Element | null = null;
  const actualMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;

    const smoothMovement = () => {
      if (!cursor) return;

      const ease = 0.15;

      const targetX = actualMouseRef.current.x;
      const targetY = actualMouseRef.current.y;

      mousePositionRef.current.x +=
        (targetX - mousePositionRef.current.x) * ease;
      mousePositionRef.current.y +=
        (targetY - mousePositionRef.current.y) * ease;

      gsap.set(cursor, {
        x: mousePositionRef.current.x,
        y: mousePositionRef.current.y,
      });

      requestAnimationFrame(smoothMovement);
    };

    const checkCursorVisibility = () => {
      const { x, y } = mousePositionRef.current;
      const element = document.elementFromPoint(x, y);
      const pinSection = element?.closest(".pin-section");
      const footerSection = element?.closest("footer");

      if (pinSection && currentSection !== pinSection) {
        gsap.to(cursor, {
          opacity: 1,
          scale: 1,
          background: "rgba(255, 255, 255, 0.1)",
          duration: 0,
        });
        if (cursor) cursor.textContent = "Discover more";
        currentSection = pinSection;
      } else if (footerSection && currentSection !== footerSection) {
        gsap.to(cursor, {
          opacity: 1,
          scale: 0.5,
          background: "blue",
          border: "none",
          duration: 0,
        });
        if (cursor) cursor.textContent = "";
        currentSection = footerSection;
      } else if (!pinSection && !footerSection && currentSection) {
        gsap.to(cursor, { opacity: 0, duration: 0 });
        currentSection = null;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      actualMouseRef.current = { x: e.clientX, y: e.clientY };
      checkCursorVisibility();
    };

    const onScroll = () => {
      if (mousePositionRef.current.x || mousePositionRef.current.y) {
        checkCursorVisibility();
      }
    };

    smoothMovement();
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <CursorStyled ref={cursorRef}>Discover more</CursorStyled>;
};

export default CustomCursor;
