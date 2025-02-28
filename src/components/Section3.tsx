import styled from "styled-components";

const SectionWrapper = styled.div`
  position: relative;
  height: 100vh; // This height is important for the scroll animation
  overflow: hidden;
`;

const TextSection = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #4d3d30;
`;

const Section3 = () => {
  return (
    <SectionWrapper>
      <TextSection className="text-section">
        <h3>
          Des meubles sur mesure,
          <br />
          pour des intérieurs uniques.
        </h3>
      </TextSection>
    </SectionWrapper>
  );
};

export default Section3;
