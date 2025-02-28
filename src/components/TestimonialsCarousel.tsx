import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 12rem 0;
  background-color: var(--color-background);
  color: var(--color-primary);
  display: flex;
  flex-direction: column;
  gap: 8rem; // Increased gap between elements

  @media screen and (max-width: 768px) {
    padding: 6rem 0;
    gap: 4rem;
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

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 4rem;
`;

const DraggableContainer = styled.div`
  display: flex;
  gap: 4rem;
  height: 100%;
  cursor: grab;
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative; // Add this
  margin-top: 4rem; // Add space between text and carousel
  padding: 0 4rem;

  &::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }

  &:active {
    cursor: grabbing;
  }
`;

const TestimonialCard = styled.div`
  min-width: 400px;
  padding: 4rem;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(77, 61, 48, 0.1);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    min-width: 280px;
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

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--color-primary);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
  opacity: ${(props) => (props.hidden ? 0 : 0.8)};
  transition: opacity 0.2s ease;
  color: var(--color-background);
  z-index: 10; // Add this

  &:hover {
    opacity: 1;
  }

  &.prev {
    left: 0;
  }

  &.next {
    right: 0;
  }
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

const TestimonialsCarousel = () => {
  const dragRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (!dragRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = dragRef.current;
    setIsAtStart(scrollLeft <= 0);
    setIsAtEnd(Math.ceil(scrollLeft + clientWidth) >= scrollWidth);
  };

  useEffect(() => {
    checkScrollPosition();
  }, []);

  const handleScroll = () => {
    checkScrollPosition();
  };

  useEffect(() => {
    const container = dragRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - dragRef.current!.offsetLeft);
    setScrollLeft(dragRef.current!.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - dragRef.current!.offsetLeft;
    const walk = x - startX;
    if (dragRef.current) {
      dragRef.current.scrollLeft = scrollLeft - walk;
      checkScrollPosition();
    }
  };

  const handlePrev = () => {
    if (!dragRef.current) return;
    dragRef.current.scrollLeft -= 450;
  };

  const handleNext = () => {
    if (!dragRef.current) return;
    dragRef.current.scrollLeft += 450;
  };

  return (
    <CarouselContainer>
      <CarouselTitle>( Testimonial )</CarouselTitle>
      <TextContainer>
        <h3>AVIS</h3>
        <h3>
          Our story is deeply rooted in fostering meaningful connections,
          providing genuine care, and upholding a strong commitment to our
          Community.
        </h3>
      </TextContainer>

      <CarouselWrapper>
        <NavButton className="prev" onClick={handlePrev} hidden={isAtStart}>
          <CaretLeft size={24} weight="bold" />
        </NavButton>

        <DraggableContainer
          ref={dragRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
            scrollBehavior: "smooth",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <Quote>{testimonial.quote}</Quote>
              <Author>{testimonial.author}</Author>
            </TestimonialCard>
          ))}
        </DraggableContainer>

        <NavButton className="next" onClick={handleNext} hidden={isAtEnd}>
          <CaretRight size={24} weight="bold" />
        </NavButton>
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default TestimonialsCarousel;
