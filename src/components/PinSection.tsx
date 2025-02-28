import styled from "styled-components";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  overflow: hidden; /* Prevents scrollbars */
  cursor: default; // Change from 'none' to 'default' to keep normal cursor
`;

const Image = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 110%;
  height: 110%;
  object-fit: cover;
  filter: brightness(0.8) blur(4px);
`;

const Heading = styled.h2`
  position: absolute;
  top: 80px;
  left: 40px;
  z-index: 4; /* Ensures text stays above images */
`;

const ImgCenter = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;
  z-index: 5;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 240px;
    height: 320px;
  }
`;

const ImgCenterContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 0;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    display: block;
    margin: 0;
    padding: 0;
  }
`;

const TextPin = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  text-align: left;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  p {
    width: 30%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;

    p {
      width: 100%;
    }
  }
`;
const TextLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  h5 {
    white-space: nowrap; // Prevent text from wrapping
  }
`;

export default function PinSection() {
  return (
    <SectionContainer className="pin-section">
      <Image
        className="bg-img1"
        src="https://plus.unsplash.com/premium_photo-1684445034726-9475962b5535?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Image 1"
      />
      <Image
        className="bg-img2"
        src="https://images.unsplash.com/photo-1581784368651-8916092072cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Image 2"
      />
      <Image className="bg-img3" src="/IMG_0317.JPG" alt="Image 3" />

      <Heading>
        <p>( Business )</p>
      </Heading>

      <TextPin className="text-pin1" style={{ opacity: 1 }}>
        <TextLeft>
          <p>01</p>
          <h5>SUR MESURE</h5>
        </TextLeft>
        <p>
          Chaque meuble Nemwood est une création unique, façonnée spécifiquement
          pour votre espace, avec une attention particulière aux dimensions,
          fonctionnalités et finitions qui vous correspondent.
        </p>
      </TextPin>
      <TextPin className="text-pin2" style={{ opacity: 0 }}>
        <TextLeft>
          <p>02</p>
          <h5>PRODUITS</h5>
        </TextLeft>
        <p>
          L'aménagement intérieur va au-delà de l'esthétique ; il vise à
          transformer une maison en un lieu où il fait bon vivre, reflétant le
          style et les besoins de ses habitants.
        </p>
      </TextPin>
      <TextPin className="text-pin3" style={{ opacity: 0 }}>
        <TextLeft>
          <p>03</p>
          <h5>ARTISANAT</h5>
        </TextLeft>
        <p>
          Notre expertise artisanale se transmet depuis des années, alliant
          techniques traditionnelles et innovations pour créer des pièces
          d'exception qui traverseront les générations.
        </p>
      </TextPin>

      <ImgCenter>
        <ImgCenterContainer className="img-center-container">
          <img className="imgctr1" src="/IMG_0317.JPG" alt="Image 1" />
          <img
            className="imgctr2"
            src="https://images.unsplash.com/photo-1581784368651-8916092072cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 2"
          />
          <img
            className="imgctr3"
            src="https://plus.unsplash.com/premium_photo-1684445034726-9475962b5535?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 3"
          />
        </ImgCenterContainer>
      </ImgCenter>
    </SectionContainer>
  );
}
