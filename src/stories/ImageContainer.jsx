import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const ImageContainer = ({
  width,
  height ,
  label ,
  alt,
  src,
  ...props
}) => {
  return (
    <Container width={width} height={height}>
      <Image src={src} alt={alt} />
    </Container>
  );
};

ImageContainer.defaultProps = {
  backgroundColor: null,
  primary: false,
  width: null,
  height: null,
  onClick: undefined,
};
