import styled from "styled-components";

const LastImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
  overflow: hidden;
  object-fit: cover;
  position: relative;
  z-index: 1; // Keep this low

  @media screen and (max-width: 768px) {
    height: 40vh;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative; // Add this
    z-index: 1; // Add this
  }
`;

const LastImg = () => {
  return (
    <>
      <LastImgContainer>
        <img
          src="https://images.unsplash.com/photo-1512972972907-6d71529c5e92?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        ></img>
      </LastImgContainer>
    </>
  );
};

export default LastImg;
