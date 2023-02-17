import React from "react";
import styled from "styled-components";

const Container = styled.div``;

export const ImageContainer = ({ size = "", label = "", ...props }) => {
  return (
    <Container>
      text displayed inside container
      <img></img>
    </Container>
  );
};

ImageContainer.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
