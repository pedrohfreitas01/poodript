import React from "react";
import { StyledButton } from "./style";

function CustomButton({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default CustomButton;
