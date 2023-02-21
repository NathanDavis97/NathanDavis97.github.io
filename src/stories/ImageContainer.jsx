import React from "react";
import styled from "styled-components";

const Container = styled.div``;

export const ImageContainer = ({ size = "", label = "", src, ...props }) => {
  console.log(src);
  return (
    <Container>
      text displayed inside container
      <img src={src} alt="alt" />
    </Container>
  );
};

ImageContainer.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
