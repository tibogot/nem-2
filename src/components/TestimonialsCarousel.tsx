import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const SectionContainer = styled.div`
  width: 100%;
  padding: 12rem 4rem;
  background-color: var(--color-background);
  color: var(--color-primary);

  @media (max-width: 768px) {
    padding: 8rem 2rem;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 4rem;
  overflow: hidden;
`;

const TestimonialTrack = styled(motion.div)`
  display: flex;
  width: fit-content;
  gap: 2rem;
  cursor: grab;
  padding: 2rem 0;

  &:active {
    cursor: grabbing;
  }
`;

const CarouselTitle = styled.p`
  padding: 0 4rem; // Only horizontal padding needed
`;

const TextContainer = styled.div`
  padding: 0 4rem; // Only horizontal padding needed
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;

  h3 {
    flex: 1; // Each h3 takes equal space
  }

  h3:last-child {
    margin-left: 4rem; // Adds space between the two h3s
    // font-weight: 400;
    // opacity: 0.5;
    text-align: right;
    line-height: 1;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;

    h3:last-child {
      margin-left: 0;
      text-align: left;
    }
  }
`;

const TestimonialCard = styled.div`
  width: 400px;
  flex-shrink: 0;
  padding: 4rem;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(77, 61, 48, 0.1);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    width: calc(100vw - 4rem);
    padding: 2rem;
  }
`;

const Quote = styled.p`
  font-size: 2rem;
  line-height: 1.5;
  font-style: italic;
`;

const Author = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
`;

const testimonials = [
  {
    quote:
      "The attention to detail and craftsmanship is exceptional. Each piece tells a story.",
    author: "Marie Laurent",
  },
  {
    quote:
      "Julia amused me with her extensive and thoughtful design approach and extraordinary talent both in user experience and visual interface design. Julia always has a range of solutions to any design task and is ready for a reasoned discussion. ",
    author: "Marie Laurent",
  },
  {
    quote:
      "Their furniture transformed my space into something truly unique and personal.",
    author: "Thomas Durand",
  },
  {
    quote: "The process was seamless, and the result exceeded my expectations.",
    author: "Sophie Martin",
  },
  {
    quote: "Their commitment to quality and sustainability is remarkable.",
    author: "Jean Dubois",
  },
  {
    quote:
      "A perfect blend of tradition and modern design. Absolutely love it!",
    author: "Claire Beaumont",
  },
  {
    quote:
      "A perfect blend of tradition and modern design. Absolutely love it!",
    author: "Claire Beaumont",
  },
];

export default function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);

  const cardGap = 32; // 2rem gap
  const totalGaps = cardGap * (testimonials.length - 1);

  useEffect(() => {
    const measureWidths = () => {
      if (containerRef.current && trackRef.current) {
        setContainerWidth(containerRef.current.clientWidth);

        const cards = Array.from(trackRef.current.childNodes);
        const totalCardsWidth = cards.reduce(
          (acc, node) => acc + (node as HTMLElement).clientWidth,
          0
        );
        setTrackWidth(totalCardsWidth);
      }
    };

    measureWidths();
    window.addEventListener("resize", measureWidths);

    return () => {
      window.removeEventListener("resize", measureWidths);
    };
  }, []);

  return (
    <SectionContainer>
      <CarouselTitle>( Testimonial )</CarouselTitle>
      <TextContainer>
        <h3>AVIS</h3>
        <h3>
          Our story is deeply rooted in fostering meaningful connections,
          providing genuine care, and upholding a strong commitment to our
          Community.
        </h3>
      </TextContainer>

      <CarouselContainer ref={containerRef}>
        <TestimonialTrack
          ref={trackRef}
          drag="x"
          dragConstraints={{
            left: -(trackWidth - containerWidth + totalGaps),
            right: 0,
          }}
          dragElastic={0.2}
          dragTransition={{ bounceDamping: 18 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <Quote>{testimonial.quote}</Quote>
              <Author>{testimonial.author}</Author>
            </TestimonialCard>
          ))}
        </TestimonialTrack>
      </CarouselContainer>
    </SectionContainer>
  );
}
