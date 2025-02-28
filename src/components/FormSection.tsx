import styled from "styled-components";
import Button from "./shared/Button";
const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: var(--color-background);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const ImageSection = styled.div`
  width: 50%; // Explicit width
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const FormContent = styled.div`
  width: 50%; // Explicit width
  box-sizing: border-box; // Ensure padding is included in width
  padding: 8rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  color: var(--color-primary);

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 4rem 2rem;
  }
`;

const Title = styled.h3`
  margin-bottom: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 400px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 1.6rem;
  }

  input {
    padding: 1.2rem;
    border: 1px solid rgba(77, 61, 48, 0.2);
    background: transparent;
    font-size: 1.6rem;
    font-family: inherit;
    color: inherit;

    &:focus {
      outline: none;
      border-color: var(--color-primary);
    }
  }
`;

const FormSection = () => {
  return (
    <FormContainer>
      <ImageSection>
        <img
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Contact"
        />
      </ImageSection>

      <FormContent>
        <div>
          <p>( Contact )</p>
          <Title>Get in touch with us</Title>
        </div>

        <StyledForm>
          <InputGroup>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </InputGroup>

          <InputGroup>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </InputGroup>

          <InputGroup>
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" required />
          </InputGroup>
        </StyledForm>
        <Button variant="primary" size="large">
          Get Started
        </Button>
      </FormContent>
    </FormContainer>
  );
};

export default FormSection;
