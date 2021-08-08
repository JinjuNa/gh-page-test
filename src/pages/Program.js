import React from 'react';
import SubTitle from '../components/SubTitle';
import program_banner from '../images/program_banner-min.png';
import ProgramList from '../components/ProgramList';
import styled from 'styled-components';

const ProgramContainer = styled.section`
    width: 1150px;
    margin:75px auto 160px auto;

    @media (max-width: 1440px) {
      width: 1000px;
    }

    @media (max-width: 768px) {
      width: 80%;
      margin: 50px auto;     
    }    

`
function Program() {
  return (
    <main>
        <SubTitle img={program_banner} title="TRAINING PROGRAMS"/>
        <div className="inner-wrap">
        <ProgramContainer>
        <ProgramList />
        </ProgramContainer>
        </div>
    </main>
  );
}

export default Program;