import React from 'react';
import styled from "styled-components";

const SubTitleContainer = styled.div`
    height:400px;
    background-image: url(${props => props.img});
    color: #fff;
    text-align: center;

    @media (max-width: 768px) {   
      height:300px;
      background-size:cover;
      display:flex;
      justify-content:center;
      align-items:center;
    }    

    & h2 {
        padding-top:160px;
        font-size:60px;

        @media (max-width: 768px) {   
          padding-top:0;
          font-size:22px;
        }            
    }

`
function SubTitle(props) {
    console.log(props)
  return (
    <SubTitleContainer img = {props.img}>
        <h2>{props.title}</h2>
    </SubTitleContainer>
  );
}

export default SubTitle;