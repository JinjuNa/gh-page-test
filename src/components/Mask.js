import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    z-index:9999;
    background:#000000;
    position: fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    filter: alpha(opacity=70);
    opacity:0.7;
`;

const Inner = styled.div`
    position:relative;
    height:auto;
`;

function Mask() {
  return (
    <Container>
        <Inner>
            
        </Inner>
    </Container>
  );
}

export default Mask;