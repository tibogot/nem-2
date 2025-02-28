import styled from "styled-components";

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: end;
  align-items: end;
  text-align: center;
  color: white;
  padding: 8rem 4rem 8rem 4rem;
  overflow: hidden; /* Prevents scrollbars */
  max-width: 100vw;
`;
const ImgScale = styled.div`
  position: absolute;
  scale: 0.3;
  top: 0;
  left: 0;
  // transform: translate(-50%, -50%);

  width: 100%;
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1604629761628-5640ee399e18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  z-index: 1;
  filter: brightness(0.7);
`;

const GlassCard = styled.div`
  width: 520px;
  height: 320px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  // border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 2;
  transform: translateY(500px); // Initial position
`;

const ImgScaleSection = () => {
  return (
    <SectionContainer className="img-scale-section">
      <ImgScale className="img-scale"></ImgScale>
      <GlassCard className="glass-card"></GlassCard>
    </SectionContainer>
  );
};

export default ImgScaleSection;
