import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import sns1 from '../images/sns1.png';
import sns2 from '../images/sns2.png';
import sns3 from '../images/sns3.png';
import sns4 from '../images/sns4.png';
import sns_exam from '../images/sns_exam.jpg';
import logo_side from '../images/logo_side.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const SnsBarContainer = styled.div`
    position : fixed;
    z-index : 9999;
    right : 0;

    & .snsbar-inner ul{
        padding: 20px;
        background-color: rgba( 255, 255, 255, 0.5 );
        text-align:center;
    }
    
    & .snsbar-inner ul li{
        border: 1px solid #dcdada;
        padding: 8px;
        margin:12px auto;
        width:72px;
    }

    & .text{
        background-color: rgba( 0, 0, 0, 0.5 );
        color:#fff;
        padding: 25px 10px;
    }

    & .text .title{
        font-size:12px;
        text-align:center;
    }

    & .text .num{
        font-size:18px;
        text-align:center;
        font-weight:800;
    }

    & .text .day{
        font-size:11px;
    }

    & .text .time{
        font-size:11px;
    }

    & .snsbar-button {
        width:20px;
        height:30px;
        background-color: rgba( 220, 218, 218, 0.5 );
        line-height:30px;
        text-align:center;
        position:absolute;
        top:305px;
        left:-20px;
        font-size:25px;
    }

    & .snsbar-button:hover{
        cursor: pointer;
    }

    & .physical {
        height : 135px;
        box-sizing : border-box;
        background   : linear-gradient(0deg,rgba(4,106,6,1) 6%,rgba(11,141,14,1) 95%);
        text-align : center;
        color : white;
        padding : 18px 0;
    }

    & .physical a{
        display : block;
        height : 100%;
    }

    & .mo-snsbar-container{
        display:none;
    }

    @media (max-width: 1440px) {
        width:120px;
        
        .snsbar-inner ul{
            padding: 8px;
        }
        
        .snsbar-inner ul li{
            padding: 5px;
            margin: 5px auto;
        }

        .text .title{
            font-size:10px;
        }

        .text .num{
            font-size:14px;
        }
    }

    @media (max-width: 768px) {
        width: 60px;
        bottom:20px;

        .pc-snsbar-container{
            display:none;
        }

        .mo-snsbar-container{
            display:block;
        }
    }
`

const MoSnsBar = styled.div`

    & li a{
        width:100%;
        height:100%;
    }

    & li img{
        width:50px;
        opacity:0.8;
        border-radius:50%;
    }
`


function SnsBar() {
    const snsBarRef = useRef(null);

    const [showSnsBar, setShowSnsBar] = useState(true);
    function handleShowSnsBar(){
        console.log(showSnsBar);
        setShowSnsBar(!showSnsBar);
        snsBarRef.current.style.transition = "all 0.8s ease-in-out";
        if(showSnsBar){
            snsBarRef.current.style.transform = `translateX(100%)`;
        }else{
            snsBarRef.current.style.transform = `translateX(0)`;
        }
    };

  return (
    <SnsBarContainer ref={snsBarRef}>
    <div className="pc-snsbar-container">
    <div className="snsbar-inner">
        <div className="physical">
            <a href="http://physicalacademy.co.kr/" target="_blank" rel="noopener noreferrer">
                <img src={logo_side} alt="로고" />
                <p>피지컬 체대입시</p>
            </a>
        </div>
        <ul>
            <li><a href="http://pf.kakao.com/_LkxgWxb" target="_blank" rel="noopener noreferrer" ><img src={sns1} alt="카카오톡" /></a></li>
            <li><a href="http://www.instagram.com/physical_base" target="_blank" rel="noopener noreferrer"><img src={sns2} alt="인스타그램" /></a></li>
            <li><a href="https://blog.naver.com/physicalbase" target="_blank" rel="noopener noreferrer"><img src={sns3} alt="블로그" /></a></li>
            <li><a href="https://www.facebook.com/%ED%94%BC%EC%A7%80%EC%BB%AC%EB%B2%A0%EC%9D%B4%EC%8A%A4-107757870913721/" target="_blank" rel="noopener noreferrer"><img src={sns4} alt="페이스북" /></a></li>
        </ul>
        <div className="text">
            <p className="title">CUSTOMER CENTER</p>
            <p className="num">051.816.9679</p>
            <p className="day">MON-FRI</p>
            <p className="time">08:00 ~ 22:00</p>
        </div>
    </div>
    <div className="snsbar-button" onClick={()=> handleShowSnsBar()} >
        { showSnsBar ? 
        <FontAwesomeIcon icon={faCaretRight} />
        :
        <FontAwesomeIcon icon={faCaretLeft} />
        }
    </div>
    </div>
    <MoSnsBar className="mo-snsbar-container">
        <ul>
            <li><a href="http://physicalacademy.co.kr/" target="_blank" rel="noopener noreferrer" ><img src={sns_exam} alt="피지컬 체대입시" /></a></li>
            <li><a href="http://pf.kakao.com/_LkxgWxb" target="_blank" rel="noopener noreferrer" ><img src={sns1} alt="카카오톡" /></a></li>
            <li><a href="http://www.instagram.com/physical_base" target="_blank" rel="noopener noreferrer"><img src={sns2} alt="인스타그램" /></a></li>
            <li><a href="https://blog.naver.com/physicalbase" target="_blank" rel="noopener noreferrer"><img src={sns3} alt="블로그" /></a></li>
            <li><a href="https://www.facebook.com/%ED%94%BC%EC%A7%80%EC%BB%AC%EB%B2%A0%EC%9D%B4%EC%8A%A4-107757870913721/" target="_blank" rel="noopener noreferrer"><img src={sns4} alt="페이스북" /></a></li>
        </ul>
    </MoSnsBar>
    </SnsBarContainer>
  );
}

export default SnsBar;