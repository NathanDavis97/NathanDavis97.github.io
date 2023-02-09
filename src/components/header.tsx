import React from "react";
import styled from "styled-components";
const StyledH1 = styled.h1``;

const Header = ({ height, width }) => {
  return (
    <div height={height}>
      <StyledH1></StyledH1>
      test2
    </div>
  );
};

export default Header;
