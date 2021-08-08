import React, { useState, useEffect } from 'react';
import Slider from '../components/Slider';
import logo1 from '../images/logo1.svg';
import logo2 from '../images/logo2.svg';
import main_program1 from '../images/main_program1-min.png';
import main_program2 from '../images/main_program2-min.png';
import main_program3 from '../images/main_program3-min.png';
import about_logo1 from '../images/logo_cfsc.png';
import about_logo2 from '../images/logo_dns.png';
import about_logo3 from '../images/logo_pdtr.png';
import about_logo4 from '../images/logo_stc.png';
import about_logo5 from '../images/logo_karfe.png';
import about_logo6 from '../images/logo_ksfk.png';
import about_logo7 from '../images/logo_kbsi.png';
import about_logo8 from '../images/logo_bufs.png';
import main_center from '../images/main_center-min.png'
import poster from '../images/poster.jpg'
import poster2 from '../images/poster2.jpg'
import popup1 from '../images/popup1.jpg'
import popup3 from '../images/popup3.jpg'
import styled from 'styled-components';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { useCookies } from 'react-cookie';
import MediaGuide from "../components/MediaGuide";
import { Link } from "react-router-dom";

const Partition1Conatiner = styled.section`
    padding:30px 0;
    text-align: center;

    @media (max-width: 768px) {             
        padding:20px 0;
    }

    & img {

        width: 100px;
        height: 138px;
        @media (max-width: 768px) {             
            width:50px;  
            height:70px;     
        }
    }     
`

const ProgramContainer = styled.section`
    display: flex;    
    color: #fff;

    @media (max-width: 992px) {             
        flex-direction:column;
    }

    @media (max-width: 768px) {             
        flex-direction:column;
    }    
`

const ProgramItem = styled.div`
    width:100%;
    /* vertical-align:bottom; */
    height: 678px;
    text-align: center;
    word-break:keep-all;
    padding : 20px;
    background-size:cover;
    background-repeat:no-repeat;

    @media (max-width: 768px) {   
        display:flex;
        align-items:center;
        justify-content:center;
        height:200px;
        padding : 0px 50px;
        box-sizing:border-box;
        background-position:center;
    }        

    &:nth-child(1){
        background-image: url(${main_program1});
    }

    &:nth-child(2){
        background-image: url(${main_program2});
    }

    &:nth-child(3){
        background-image: url(${main_program3});
    }

    & .program-item-title {
        font-size: 45px;
        font-weight: 800;
        margin-top:235px;
        /* margin-bottom: 35px; */
        height:100px;
        line-height:100px;

        @media (max-width: 1600px) { 
            line-height:50px;
            margin-bottom:20px;
        }     

        @media (max-width: 1200px) { 
            font-size:30px;
        }        

        @media (max-width: 768px) {      
            margin-top:0px;
            margin-bottom: 0px;    
            font-size:20px;
            height:auto;
            font-weight: 500;
        }            
    }

    & .program-item-text{
        font-size: 16px;
        height:80px;

        @media (max-width: 768px) {             
            margin-top:10px;
            font-size:10px;
            height:auto;
        }          
    }

    & .program-item-button{
        font-size: 16px;
        border: 2px solid #fff;
        width:110px;
        height: 40px;
        line-height: 40px;
        margin:0 auto;
        margin-top:10px;

        @media (max-width: 768px) {                         
            margin-top:20px;
            font-size: 12px;   
            height: 30px;  
            width:80px;     
            line-height: 30px; 
        }        
    }

    & .program-item-button a{
        display : inline-block;
        width:100%;
        height:40px;
    }

    & .program-item-button a:hover{
        cursor: pointer;
    }

    & .animated {
        transition : all 0.8s ease-in-out;
    }

    @media (max-width: 1440px) {
        .program-item-text{
            word-break:keep-all;
        }
        .program-item-text br{
            display:none;
        }
    }

`

const Partition2Container = styled.section`
    padding:50px 0;
    text-align: center;
    display:flex;
    justify-content:center;
    align-items:center;

    @media (max-width: 768px) { 
        padding:0;        
        flex-direction:column;
        margin-top:20px;
        margin-bottom:40px;
    }

    & h3 {
        height: 50px;
        line-height: 50px;
        font-size:28px;

        @media (max-width: 768px) {             
            font-size:12px;
            height:auto;
            line-height:15px;
        }            
    }   

    & img {
        width: 210px;
        height: 70px;
        margin-right: 35px;
        @media (max-width: 768px) { 
            margin-right:5px;
            width:160px;            
        }
    }
`

const CenterContainer = styled.section`
    display : flex;
    
    @media (max-width: 768px) { 
        flex-direction:column;
    }

    & .center-item:nth-child(1){
        background-image : url(${main_center});
        width:45%;
        background-size:cover;

        @media (max-width: 768px) { 
            width:100%;
            height:250px;
            background-position:center center;
        }        
    }

    & .center-item:nth-child(2){
        background-color: #ebebeb;
        width:55%;
        text-align: center;
        padding-bottom:120px;

        @media (max-width: 768px) { 
            width:100%;
            padding-bottom: 20px;
        }        
    }

    & .center-item:nth-child(2) h3 {
        padding-top:120px;
        margin-bottom:120px;
        font-size:35px;
        font-weight:300;
     
        @media (max-width: 1440px) {
            font-size:30px;
        }

        @media (max-width: 768px) { 
            font-size:14px;
            padding:0;
            margin:0;
            padding-top:40px;         
            margin-bottom:40px;
        }                

    }

    
`

const CenterLogoConatiner = styled.div`
    display: flex;
    @media (max-width: 768px) { 
        display:block;
    }             
    .border-right{
        border-right : 2px solid #000;
        @media (max-width: 768px) { 
            border-right:none;
        }         
    }
`

const CenterLogoItem = styled.div`    
    width:50%;
    box-sizing:border-box;
    @media (max-width: 768px) { 
        width:100%;
    }    
    & ul {
        @media (max-width: 768px) { 
            display:flex;
            justify-content:center;        
            flex-wrap:wrap; 
        }
    }
`

const CenterLogoComponent= styled.li`
    height : 160px;
    position:relative;

    @media (max-width: 768px) { 
        width:50%;
        height:100px;
    }     

    & a {
        display:inline-block;
        height:160px;  
        @media (max-width: 768px) { 
            height: 35px;
        }      
    }

    & .text {
        width:100%;
        position:absolute;
        left:0;
        bottom:45px;
        @media (max-width: 768px) { 
            font-size:10px;
            bottom:45px;
            padding-top:5px;
        }        

    }

    * img {
        @media (max-width: 768px) { 
            width:auto;
            height:auto;
            max-width: 100px;
            max-height: 30px;
        }
    }
`

const VideoContainer = styled.section`
    background-color:#fa7207;
    color : #fff;
    text-align:center;
    display:flex;

    

    @media (max-width: 1440px) { 
        display:block;     
    }    

    .video-item{
        flex : 1;
        padding: 80px 0;

        @media (max-width: 768px) { 
            padding: 30px 0;        
        }   
    }

    .video-item:nth-child(2){
        background-color:#fc8325;
    }

    & h3 {
        font-size:30px;
        margin-top:40px;
        margin-bottom: 20px;
        @media (max-width: 768px) { 
            margin-top:20px;
            margin-bottom: 5px;            
            font-size:14px;
        }            
    }

    & span {
        font-size:18px;
        font-weight : 400;
        @media (max-width: 768px) {         
            font-size:12px;
        } 
    }

    & p {
        @media (max-width: 768px) { 
            font-size:10px;
            max-width:300px;
            margin:0 auto;
        }     
    }

    & br {
        @media (max-width: 768px) { 
            display:none;
        }
    }

`

const MyVideo = styled.div`
    width:700px;
    margin:0 auto;

    @media (max-width: 768px) { 
        width:90%;        
    }    
`

const PopContainer = styled.div`
    position: absolute; 
    z-index:999999; 
    background:#ffffff;
    top:1rem; 
    left:1rem; 
    font-size:15px; 
    width: 90%; 
    max-width: 430px;
    
`;

const PopContainer2 = styled(PopContainer)`
    left:30rem; 
    @media (max-width: 768px) { 
        top:3rem;
        left: 2rem;
    }
`;

const PopButton = styled.div`
    text-align:center;
    padding-bottom:10px;

    label{
        color:#e9e9e9;
        cursor: pointer;
    }

    input{
        width:20px;
    }

    .btn-close{
        color:#e9e9e9;
        cursor: pointer;
    }

`;


function Main() {
    const [display1,setDisplay1] = useState('none');
    const [display2,setDisplay2] = useState('none');
    const [cookie, setCookie] = useCookies(['name']);	
    const [popClose1, setPopClose1] = useState(false);	
    const [popClose2, setPopClose2] = useState(false);	
    
    function pop_close1(){
        if(popClose1){
            setCookie('p_200403', '1', { path: '/' , maxAge:60*60*24});	
        }
		setDisplay1('none');
	}

    function handlePopChange1(){
        setPopClose1(!popClose1);
    }

    function pop_close2(){
        if(popClose2){
            setCookie('p_200404', '1', { path: '/' , maxAge:60*60*24});	
        }
		setDisplay2('none');
	}

    function handlePopChange2(){
        setPopClose2(!popClose2);
    }

    useEffect(()=>{

		if(cookie.p_200403 !== '1') {
			setDisplay1('block');
        }
        if(cookie.p_200404 !== '1') {
			setDisplay2('block');
		}
	},[]);
    
  return (
    <main className="main">        
        {/* <MediaGuide /> */}
        <PopContainer style={{display:display1, backgroundColor : '#05c633'}}>
            <img src={popup1} width="100%" alt="이벤트" />
            <PopButton>
                <label>
                    오늘 하루 열지 않기 &nbsp;
                    <input type="checkbox" name="no" defaultChecked={false} onChange={()=>handlePopChange1()} />
                </label>
                <a className="btn-close" title="close" onClick={()=>pop_close1()}>닫기</a>
            </PopButton>
        </PopContainer>	
        <PopContainer2 style={{display:display2, backgroundColor : '#323232'}}>
            <img src="http://physicalbase.co.kr/popup.jpg" width="100%" alt="이벤트" />
            <PopButton>
                <label>
                    오늘 하루 열지 않기 &nbsp;
                    <input type="checkbox" name="no" defaultChecked={false} onChange={()=>handlePopChange2()} />
                </label>
                <a className="btn-close" title="close" onClick={()=>pop_close2()}>닫기</a>
            </PopButton>
        </PopContainer2>	
        <Slider />
        <Partition1Conatiner>
            <img src={logo1} alt=""/>            
        </Partition1Conatiner>
        <ProgramContainer>
            <ProgramItem>
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' delay={200} animateOnce={true} >
                <div className="program-item-title">
                    스포츠 재활 프로그램
                </div>
                <div className="program-item-text">
                    수술 후 또는 부상 후에 일상생활이나 현장으로의 복귀가 가능하도록 <br/>다양하고 전문적인 재활 운동을 적용합니다.
                </div>
                <div className="program-item-button">
                    <Link to="/program/#1">+더보기</Link>
                </div>
            </ScrollAnimation>
            </ProgramItem>
            <ProgramItem>
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' delay={250} animateOnce={true} >
                <div className="program-item-title">
                    스포츠 퍼포먼스 프로그램
                </div>
                <div className="program-item-text">
                    유소년 및 프로선수들에게 더 빠르고, 강하고, <br />파워풀한 퍼포먼스가 가능하게 만들어 드립니다.
                </div>
                <div className="program-item-button">
                    <Link to="/program/#2">+더보기</Link>
                </div>
            </ScrollAnimation>
            </ProgramItem>
            <ProgramItem>
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' delay={300} animateOnce={true} >
                <div className="program-item-title">
                    퍼스널트레이닝 프로그램
                </div>
                <div className="program-item-text">
                    개개인의 목적에 맞는 운동 프로그램을 전문적인 평가에 <br />기반하여 제공해서, 훨씬 더 나은 삶의 질을 누릴 수 있게 해드립니다. 
                </div>
                <div className="program-item-button">
                    <Link to="/program/#3">+더보기</Link>
                </div>
            </ScrollAnimation>
            </ProgramItem>
        </ProgramContainer>
        <Partition2Container>
            <img src={logo2} alt="피지컬 베이스 로고"/>
            <h3>
                피지컬 베이스 트레이닝 센터에 여러분을 모십니다!
            </h3>
        </Partition2Container>
        <CenterContainer>
            <div className="center-item"></div>
            <div className="center-item">
                <h3><strong>ABOUT</strong> PHYSICAL BASE  TRAINING CENTER</h3>
                <CenterLogoConatiner>
                    <CenterLogoItem className="border-right">
                        <ul>
                            <CenterLogoComponent>
                                <Link to="http://cfsckorea.com" target="_blank" rel="noopener noreferrer">
                                <img src={about_logo1} alt="CFSC" />
                                <div className="text">
                                    CFSC 미국스트렝스 교육기관
                                </div>
                                </Link>
                            </CenterLogoComponent>
                            <CenterLogoComponent>
                                <Link to="http://www.dnskorea.org" target="_blank" rel="noopener noreferrer">
                                <img src={about_logo2} alt="DNS" />
                                <div className="text">
                                    DNS 체코 재활 교육기관
                                </div>
                                </Link>
                            </CenterLogoComponent>
                            <CenterLogoComponent>
                                <Link to="https://pdtr-global.com/" target="_blank" rel="noopener noreferrer">
                                <img src={about_logo3} alt="P-DTR" />
                                <div className="text">
                                    P-DTR 미국 재활 교육기관
                                </div>
                                </Link>
                            </CenterLogoComponent>
                            <CenterLogoComponent>
                                <Link to="http://www.stckorea.org" target="_blank" rel="noopener noreferrer">
                                <img src={about_logo4} alt="STC" />
                                <div className="text">
                                    STC 스트렝스 트레이닝 단체
                                </div>
                                </Link>
                            </CenterLogoComponent>
                        </ul>
                    </CenterLogoItem>
                    <CenterLogoItem>
                        <ul>
                            <CenterLogoComponent>
                                <Link to="http://www.karfe.org" target="_blank" rel="noopener noreferrer">
                                <img src={about_logo5} alt="KARFE" />
                                <div className="text">
                                    KARFE 재활/선수트레이닝 교육기관
                                </div>
                                </Link>
                            </CenterLogoComponent>
                            <CenterLogoComponent>
                                <Link to="http://www.karfe.org" target="_blank" rel="noopener noreferrer">
                                <img src={about_logo6} alt="KSFK" />
                                <div className="text">
                                    한국기능운동학회 스포츠재활연구분야
                                </div>
                                </Link>
                            </CenterLogoComponent>
                            <CenterLogoComponent>
                                <Link to="http://karfe.org/kbsi" target="_blank" rel="noopener noreferrer">
                                <img src={about_logo7} alt="KBSI" />
                                <div className="text">
                                    KBSI 야구스트렝스&컨디셔닝연구소
                                </div>
                                </Link>
                            </CenterLogoComponent>
                            <CenterLogoComponent>
                                <Link to="https://gima.bufs.ac.kr/gima/index.php?pCode=MN100035" target="_blank" rel="noopener noreferrer">
                                <img src={about_logo8} alt="BUFS" />
                                <div className="text">
                                    부산외국어대학교 산학협력기관
                                </div>
                                </Link>
                            </CenterLogoComponent>
                        </ul>
                    </CenterLogoItem>
                </CenterLogoConatiner>
            </div>
        </CenterContainer>
        <VideoContainer>
            <div className="video-item">
            <MyVideo>
                <video width="80%" poster={poster}controls src="http://karfe1.cache.iwinv.net/158927436122745.mp4">
                    <source type="video/mp4"/>
                </video>				
            </MyVideo>
            <h3>피지컬 베이스 트레이닝 센터</h3>
            <p>퍼스널 트레이닝, 선수트레이닝, 재활트레이닝, 엘리트전문그룹트레이닝을<br />
            최고의 시설과 최고의 강사진이 여러분에게 맞춤식 운동을 제공합니다!
            </p>
            </div>
            <div className="video-item">
            <MyVideo>
                <video width="80%" poster={poster2} controls src="http://karfe1.cache.iwinv.net/159254363766963.mp4">
                    <source type="video/mp4"/>
                </video>
            </MyVideo>
            <h3>프로야구 선수의 성공 스토리 <span> LG트윈스 이정우선수</span></h3>
            <p>청소년 야구 국가대표에서 프로팀 입단까지 <br />
            단 한번의 선택으로 만들어진 감동 스토리
            </p>
            </div>
        </VideoContainer>
    </main>
  );
}

export default Main;