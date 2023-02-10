import React from "react";
import styled from "styled-components";
const StyledH1 = styled.h1``;

const Header = ({ height, width, h1Text, copy }) => {
  return (
    <div height={height} width={width}>
      <StyledH1> {h1Text}</StyledH1>
      {copy}
    </div>
  );
};

export default Header;
