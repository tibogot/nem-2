import styled from "styled-components";
import { ArrowDown } from "@phosphor-icons/react";
// import Button from "./shared/Button";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 100svh;
  width: 100%;
  padding: 40px;
  position: relative;
  overflow: hidden;
  color: white;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%; /* Extra height for parallax */
  background-image: url("https://images.unsplash.com/photo-1604629761628-5640ee399e18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: brightness(0.8);
`;

const Logo = styled.div`
  position: absolute;
  top: 100px;
  width: 80%;
  height: auto;
  z-index: 10;

  @media screen and (max-width: 768px) {
    width: 90%;
    top: 80px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export default function Hero() {
  return (
    <HeroContainer>
      <BackgroundImage className="hero-bg" />
      <Logo className="logo">
        <svg
          viewBox="0 0 540 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.6 24.8C47.76 24.8 57.36 31.84 57.36 46.816V92H43.792V50.656C43.792 41.824 40.08 36.192 30.864 36.192C20.496 36.192 13.84 42.464 13.84 52.192V92H0.4V26.592H13.84V35.04H14.096C17.552 29.92 24.336 24.8 35.6 24.8ZM98.578 82.912C109.714 82.912 114.194 76 115.346 72.032H128.786C125.458 84.448 115.73 93.92 98.962 93.92C78.61 93.92 66.194 79.84 66.194 59.36C66.194 38.112 78.61 24.8 98.322 24.8C119.442 24.8 129.81 39.52 129.81 62.816H79.634C79.634 73.824 86.674 82.912 98.578 82.912ZM98.322 35.424C87.442 35.424 79.634 42.72 79.634 52.832H116.37C116.37 42.72 109.202 35.424 98.322 35.424ZM211.217 24.8C224.401 24.8 231.185 32.736 231.185 46.816V92H217.617V50.656C217.617 41.824 215.825 36.192 206.609 36.192C197.521 36.192 191.889 42.464 191.889 52.192V92H178.321V50.656C178.321 41.824 176.529 36.192 167.185 36.192C158.225 36.192 152.465 42.464 152.465 52.192V92H139.025V26.592H152.465V35.04H152.721C156.177 29.92 162.321 24.8 172.177 24.8C181.393 24.8 186.897 29.024 189.585 36.064H189.841C194.705 29.792 201.105 24.8 211.217 24.8ZM236.256 26.592H250.464L263.776 76.256H264.032L277.344 26.592H290.528L303.968 76.256H304.224L317.408 26.592H331.616L311.648 92H298.08L284 42.08H283.744L269.792 92H256.352L236.256 26.592ZM366.215 93.92C345.735 93.92 333.319 79.712 333.319 59.36C333.319 39.008 345.735 24.8 366.215 24.8C386.695 24.8 399.111 39.008 399.111 59.36C399.111 79.712 386.695 93.92 366.215 93.92ZM366.215 82.912C379.015 82.912 385.671 72.8 385.671 59.36C385.671 45.792 379.015 35.808 366.215 35.808C353.415 35.808 346.759 45.792 346.759 59.36C346.759 72.8 353.415 82.912 366.215 82.912ZM437.84 93.92C417.36 93.92 404.944 79.712 404.944 59.36C404.944 39.008 417.36 24.8 437.84 24.8C458.32 24.8 470.736 39.008 470.736 59.36C470.736 79.712 458.32 93.92 437.84 93.92ZM437.84 82.912C450.64 82.912 457.296 72.8 457.296 59.36C457.296 45.792 450.64 35.808 437.84 35.808C425.04 35.808 418.384 45.792 418.384 59.36C418.384 72.8 425.04 82.912 437.84 82.912ZM525.977 0.479996H539.417V92H525.977V84.448H525.721C522.265 88.928 515.865 93.92 505.753 93.92C488.985 93.92 476.569 80.864 476.569 59.36C476.569 37.856 488.985 24.8 505.753 24.8C515.865 24.8 522.265 29.536 525.721 34.528H525.977V0.479996ZM508.057 82.912C519.065 82.912 525.849 73.824 525.849 59.36C525.849 44.768 519.065 35.808 508.057 35.808C496.281 35.808 490.009 46.56 490.009 59.36C490.009 72.16 496.281 82.912 508.057 82.912Z"
            fill="white"
          />
        </svg>
      </Logo>
      <TextContainer>
        <ArrowDown size={24} weight="bold" />
        <p>( Scroll to explore )</p>
      </TextContainer>
      {/* <Button variant="primary" size="large">
        Get Started
      </Button>
      <Button variant="outline">Learn More</Button>
      <Button variant="text-with-arrow">Learn more</Button> */}
    </HeroContainer>
  );
}
