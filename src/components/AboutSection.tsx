import styled from "styled-components";
import Button from "./shared/Button";
import VelocityTicker from "./VelocityTicker";

const Container = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  // background-color: rgb(177, 26, 26);
  padding: 12rem 4rem 8rem 4rem;
  gap: 10rem;
  color: var(--color-primary);
  background-color: var(--color-background);

  @media screen and (max-width: 768px) {
    padding: 8rem 2rem 4rem 2rem;
    gap: 6rem;
  }
`;

const TextContainer = styled.div`
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

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Imgscrollcontainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: 640px;

  @media screen and (max-width: 768px) {
    height: 400px;
    flex-direction: column;
  }
`;
const ImgLeft = styled.div`
  display: flex;
  flex: 1;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: 100%;
  clip-path: inset(0 0 100% 0); // Start fully hidden from bottom
  // background-color: red;
`;
const ImgRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  align-items: start;
  width: 100%;
  height: 100%;
  clip-path: inset(0 0 100% 0); // Start fully hidden from bottom
  // background-color: blue;
`;
const AboutSection = () => {
  return (
    <Container>
      <p>( About )</p>
      <TextContainer>
        <h3>OUR STORY</h3>
        <h3>
          Our story is deeply rooted in fostering meaningful connections,
          providing genuine care, and upholding a strong commitment to our
          Community.
        </h3>
      </TextContainer>
      <ButtonWrapper>
        <Button variant="text-with-arrow">Learn more</Button>
      </ButtonWrapper>
      <Imgscrollcontainer className="first-img-container">
        <ImgLeft className="first-img-left">
          <img
            src="src\assets\IMG_0317.JPG"
            alt="placeholder"
            style={{ width: "300px", height: "400px" }}
          ></img>
        </ImgLeft>
        <ImgRight className="first-img-right">
          {" "}
          <img
            src="src\assets\IMG_0317.JPG"
            alt="placeholder"
            style={{ width: "100%", height: "100%" }}
          ></img>
        </ImgRight>
      </Imgscrollcontainer>
      <VelocityTicker></VelocityTicker>
      <TextContainer>
        <h3>INNOVATION</h3>
        <h3>
          Our tale is profoundly entrenched in cultivating significant ties,
          assuring genuine consideration, and maintaining a robust dedication to
          our Community.
        </h3>
      </TextContainer>
      <ButtonWrapper>
        <Button variant="text-with-arrow">Learn more</Button>
      </ButtonWrapper>
      <Imgscrollcontainer className="second-img-container">
        <ImgLeft className="second-img-left">
          <img
            src="src\assets\IMG_0317.JPG"
            alt="placeholder"
            style={{ width: "100%", height: "100%" }}
          ></img>
        </ImgLeft>
        <ImgRight className="second-img-right">
          <img
            src="src\assets\IMG_0317.JPG"
            alt="placeholder"
            style={{ width: "300px", height: "400px" }}
          ></img>
        </ImgRight>
      </Imgscrollcontainer>
    </Container>
  );
};

export default AboutSection;
