import { ComponentProps } from "react";
import styled from "styled-components";

type ButtonProps = ComponentProps<"button">;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  color: white;
  cursor: pointer;
`;

export default Button;
