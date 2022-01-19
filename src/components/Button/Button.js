import React, { memo } from "react";
import styled from "styled-components";

const StyledButton = styled("button")`
  padding: 8px 6px;
  background-color: ${(props) => props.theme.button.bg};
  border-radius: 4px;
  border: 1.5px solid;
  border-color: ${(props) => props.theme.button.bc};
  color: ${(props) => props.theme.color.main};
  ${(props) => props.sx ?? {}};

  :hover {
    cursor: pointer;
  }
`;
const Button = ({ children, ...btnProps }) => {
  return <StyledButton {...btnProps}>{children}</StyledButton>;
};

export default memo(Button);
