import styled, { css } from "styled-components";
import { ArrowUpRight } from "@phosphor-icons/react";

interface ButtonProps {
  $variant?: "primary" | "secondary" | "outline" | "text-with-arrow"; // Changed to $variant
  $size?: "small" | "medium" | "large"; // Changed to $size
  $hasIcon?: boolean;
  $fullWidth?: boolean;
}

const variants = {
  primary: css`
    background-color: #4d3d30;
    color: white;
  `,
  secondary: css`
    background-color: transparent;
    color: #4d3d30;
    border: 1px solid #4d3d30;
  `,
  outline: css`
    background-color: transparent;
    color: #4d3d30;
    border-bottom: 1px solid #4d3d30;
    border-radius: 0;
    padding: 0;
  `,
  "text-with-arrow": css`
    background-color: transparent;
    color: #4d3d30;
    padding: 0;
    font-weight: 500;
    border-radius: 0;

    // &:hover {
    //   opacity: 1;
    //   gap: 16px; // Increase gap on hover
    //   svg {
    //     transform: translateX(4px);
    //   }
    // }

    // svg {
    //   transition: transform 0.2s ease;
    // }
  `,
};

const sizes = {
  small: css`
    padding: 8px 16px;
    font-size: 1.4rem;
  `,
  medium: css`
    padding: 12px 24px;
    font-size: 1.6rem;
  `,
  large: css`
    padding: 16px 32px;
    font-size: 1.8rem;
  `,
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "MyFont", sans-serif;
  transition: all 0.2s ease;
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};

  ${(props) => variants[props.$variant || "primary"]}
  ${(props) => sizes[props.$size || "medium"]}

  &:hover {
    opacity: 0.9;
  }
`;

interface Props extends Omit<ButtonProps, "$variant" | "$size"> {
  variant?: "primary" | "secondary" | "outline" | "text-with-arrow";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  ...props
}: Props) => {
  return (
    <StyledButton $variant={variant} $size={size} {...props}>
      {children}
      {variant === "text-with-arrow" && (
        <ArrowUpRight size={18} weight="regular" />
      )}
    </StyledButton>
  );
};

export default Button;
