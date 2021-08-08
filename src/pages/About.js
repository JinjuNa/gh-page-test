import React from 'react';
import SubTitle from '../components/SubTitle';
import about_banner from '../images/about_banner-min.png';
import styled from 'styled-components';
import ZoneList from '../components/ZoneList';
import partner1 from '../images/partner1.png';
import partner2 from '../images/partner2.png';
import partner3 from '../images/partner3.png';
import partner4 from '../images/partner4.png';
import partner5 from '../images/partner5.png';
import partner6 from '../images/partner6.png';
import partner7 from '../images/partner7.png';
import partner8 from '../images/partner8.png';
import partner9 from '../images/partner9.png';
import partner10 from '../images/partner10.png';
import MediaGuide from "../components/MediaGuide";

const CenterContainer = styled.div`
    /* width: 1150px; */
    margin:75px auto 160px auto;
    @media (max-width: 1440px) {
        box-sizing:border-box;
    }

    & section{
      width:1150px;
      margin : 50px auto;
      padding-right : 150px;
      padding-left : 150px;

      @media (max-width: 1440px) {
        width: 1000px;
        padding-right:50px;
        padding-left:50px;
      }

      @media (max-width: 768px) {
        width:80%;
        /* margin:0; */
        padding-right:20px;
        padding-left:20px;
        margin: 20px auto;
      }     
    } 
    & .border-section {
      border-top:1px solid #dadada;
      padding-top:130px;

      @media (max-width: 768px) {
        padding-top:50px;
        margin-top:80px;
        /* margin-bottom:0px; */
      }   
    }

    

    @media (max-width: 768px) {
      width:auto;
      margin:0;
    }    

    & h3 {
      text-align:center;
      font-size:28px;
      margin-bottom:25px;
      @media (max-width: 768px) {
        font-size:16px;
        padding-top:25px;
      }      
    }

    & h3.f-60{
      font-size:60px;
      @media (max-width: 768px) {
        font-size:19px;
      }        
    }

    & section > p {
      text-align: center;
      margin-bottom:80px;
      font-size:16px;
      word-break:keep-all;

      @media (max-width: 1440px) {      
        padding:0 40px;           
      }

      @media (max-width: 768px) {
        font-size:12px;
        margin:0;
        padding:0;
        width:90%;
        margin:0 auto;
      }            
    }

    & section>p br {
      @media (max-width: 1440px) {      
        display:none;
      }   
    }

    & p.small-title {
      margin-bottom:45px;
      margin-top:70px;      
      @media (max-width: 768px) {
        margin: 10px auto;
      } 
    }
`

const MapContainer = styled.section`
    display: flex;
    justify-content: space-between;
    padding-bottom:120px;

    @media (max-width: 768px) {
      padding-top:30px;
      flex-direction:column;
      width:90%;
      margin:0 auto;
      padding-bottom:0;
    }    

    & .map-api{
      flex-basis:55%;
      @media (max-width: 768px) {        
        height:200px;
        margin-top:50px;
      }   
    }

    & .map-text{
      flex-basis:40%;           
      @media (max-width: 768px) {        
        font-size: 12px;
      }      
    }

    & .map-text h5{
      font-size : 24px;
      margin-bottom:25px;

      @media (max-width: 768px) {
        margin:0;
        padding-top:10px;
        font-size: 14px;
      }      
    }

    & .map-text .highlight{
      color : #fe6f03;
      font-size:16px;
      @media (max-width: 768px) {
        font-size:12px;
      }        
    }

    & .map-text p {    
      @media (max-width: 768px) {
        padding-top:10px;
      }      
    }
`

const PartnerListContainer = styled.section`
    text-align:center;
    & p {
      padding:0;
      margin:0;
    }
`

const PartnerList = styled.ul`
    text-align:center;

    @media (max-width: 768px) {
      display:flex;
      flex-wrap:wrap;
      justify-content:center;
    }            

    & li {
      margin: 0 15px;
      display:inline-block;  
      @media (max-width: 768px) {
        margin:0;
        padding:0;
        width: 44%;
        height:70px;
      }
    }

    & li img {
      vertical-align: middle;      
      @media (max-width: 768px) {
        max-width: 70%;
        max-height: 32px;
      }
    }
`


function About() {
  return (    
    <main>
        {/* <MediaGuide></MediaGuide> */}
        <SubTitle img={about_banner} title="ABOUT US"/>
        <div className="inner-wrap">
        <CenterContainer>
          <section>
          <h3>센터 소개</h3>
          <p>피지컬 베이스 센터는 선수와 일반인 회원분들을 대상으로 퍼스널트레이닝, 재활 운동, 선수트레이닝, 엘리트 그룹 운동을 <br />
              맞춤식으로 제공하고 있습니다. 모든 운동 프로그램은 스마트핏과 휴병원이 연계해서 1:1 또는 그룹으로 전문적으로 진행하고 있습니다.<br />
               센터 내부의 운동공간은 크게 6가지 존으로 나누어져 있습니다.
          </p>
          <ZoneList />
          </section>
                   
          <section className="border-section">
          <h3 className="f-60">“Rehab to Performance”</h3> 
          <p>  피지컬 베이스는 부상으로 인한 선수 및 일반인들의 재활 트레이닝을 통한 회복 및 피지컬 트레이닝을 통한 체력 강화(Rehab to Performance), <br />
                ICT 스포츠 융복합 기술을 활용한 스마트 재활 트레이닝, 부상 예방 및 재부상 방지를 위한 교육을 바탕으로 회원님들을 바꿀 수 있도록 지도한다는 미래 가치를 지향하고 있습니다. <br />
                세부적으로는 부상 단계에 따라서 센터를 방문한 회원 및 선수들에게 일상생활이나 스포츠 현장으로 돌아가는데 필요한 특이적 재활 트레이닝을 제공합니다. <br />
                이러한 트레이닝은 국내외 스포츠 재활 센터와 MOU를 통해 선진 운동과학 이론에 근거한 트레이닝을 제공하며, <br />
                재부상 방지를 위한 국내 스포츠 재활 교육기관과 협력을 통한 지속적인 지도자 교육 및 관리를 진행 하는 것에 있습니다.
          </p>
          </section>

          <MapContainer>
            <div className="map-api">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d407.7104231112429!2d129.0506361!3d35.1645162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ebfe65e96a15%3A0x25ec45955163b0b3!2z7ZS87KeA7Lus67Kg7J207Iqk!5e0!3m2!1sko!2skr!4v1592369449905!5m2!1sko!2skr" width="100%" height="100%" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
            <div className="map-text">
              <h5>위치 및 오시는 길</h5>
              <p>주소 : 부산 진구 신천대로 252 4층 피지컬 베이스<br />
                  전화 번호 : 051 - 816 - 9679
                <br />
                <br />
                <strong>대중교통</strong>
                <br />
                <span className="highlight">지하철</span><br />
                2호선 부암역 4번 출구 (도보 10분 거리)
                <br />
                <br />
                <span className="highlight">버스</span><br />
                1. 진구청 앞 하자 : 54, 66, 81, 83-1, 88, 133<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(이마트 주차장 입구쪽으로 도보 5분)<br />
                2. 진양교차로 하차 : 17, 23, 44, 129-1, 138-1, 141, 160, 167, 169-1<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(부암 로타리 방면 도보 5분)
                <br />
                <br />
                <span className="highlight">주차</span><br />
                지하 2층 ~ 4층 주차장 이용 가능, 2시간 무료 주차 가능. 
              </p>
            </div>
          </MapContainer>
          <PartnerListContainer className="border-section">
          <h3 className="f-60">Partner</h3>
          <p className="small-title">국내</p>
          <PartnerList>
            <li>
               <a href="http://www.smartfitkorea.com/" target="_blank" rel="noopener noreferrer"><img src={partner1} alt="스마트 핏" /></a>
            </li>
            <li>
               <a href="http://www.hu-hospital.co.kr/kr/" target="_blank" rel="noopener noreferrer"><img src={partner2} alt="휴병원" /></a>
            </li>
            <li>
               <a href="http://www.karfe.org" target="_blank" rel="noopener noreferrer"><img src={partner3} alt="카르페" /></a>
            </li>
            <li>
               <a href="http://www.karfe.org" target="_blank" rel="noopener noreferrer"><img src={partner4} alt="한국기능운동학회" /></a>
            </li>
            <li>
               <a href="http://karfe.org/kbsi" target="_blank" rel="noopener noreferrer"><img src={partner5} alt="한국 야구 스트렝스&컨디셔닝 연구소" /></a>
            </li>
            <li>
               <a href="https://gima.bufs.ac.kr/gima/index.php?pCode=MN100035" target="_blank" rel="noopener noreferrer"><img src={partner6} alt="부산외국어대학교" /></a>
            </li>
          </PartnerList>
          <p className="small-title">국외</p>
          <PartnerList>
            <li>
               <a href="http://cfsckorea.com" target="_blank" rel="noopener noreferrer"><img src={partner7} alt="CFSC" /></a>
            </li>
            <li>
               <a href="https://pdtr-global.com/" target="_blank" rel="noopener noreferrer"><img src={partner8} alt="P-DTR" /></a>
            </li>
            <li>
               <a href="http://www.dnskorea.org" target="_blank" rel="noopener noreferrer"><img src={partner9} alt="DNS" /></a>
            </li>
            <li>
               <a href="http://www.stckorea.org" target="_blank" rel="noopener noreferrer"><img src={partner10} alt="STC" /></a>
            </li>
          </PartnerList>
          </PartnerListContainer>

        </CenterContainer>

        </div>
    </main>
  );
}

export default About;