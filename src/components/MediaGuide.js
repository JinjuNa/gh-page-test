import React from 'react';
import styled from 'styled-components';

function MediaGuide() {
  return (
    <Container>
      <XS>XS ( ~ 768px )</XS>
      <SM>SM ( ~ 992px )</SM>
      <MD>MD ( ~ 1200px )</MD>
      <LG>LG ( 1200px ~ )</LG>
    </Container>
  );
}

const Container = styled.section`
  display:flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  background: #ffffff;
  width: 200px;
  display:flex;
  position: fixed;
  border: 3px solid green;
  z-index:9999999;
  right:5%;
  bottom: 5%;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size:12px;
`
const XS = styled.div`
  display:block;
  @media (min-width: 767.98px) {
    display:none;
  }
`;

const SM = styled.div`
  display:none;
  @media (max-width: 991.98px) {
    display:block;
  }
`;

const MD = styled.div`
  display:none;
  @media (max-width: 1199.98px) {
    display:block;
  }
`;

const LG = styled.div`
`;

export default MediaGuide;