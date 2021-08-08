import React,{useState, useRef} from 'react';
import logo from '../images/logo_white.svg';
import styled from 'styled-components';
import x from '../images/x.svg';
import more from '../images/more.svg';
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
    color: #fff;
    /* background: rgb(255,110,2); */
    background: linear-gradient(0deg, rgba(255,110,2,1) 6%, rgba(227,129,47,1) 95%);
    padding-top: 35px;
    padding-bottom: 10px;

    & .pc-menu-container {
        display:block;
    }

    & .pc-menu-container .inner-wrap{
        width: 1360px;
        margin: 0 auto;
        @media all and (max-width:1440px){
            width:1000px;
        }

        @media (max-width: 768px) { 
            width:100%;
        }
    }

    & .mo-menu-container {
        display:none;
    }    

    & .wrap{
        display: flex;
        justify-content: space-between;
    }
    
    & nav ul{
        display: flex;
        margin-top:15px;
        margin-right: 80px;
    }

    & nav ul li a {
        position : relative;
    }

    & nav ul li a div{
        width:100%;
        text-align:center;
        opacity:0.8;
        font-size:12px;
        color:#efefef;
    }

    & h1 img{
        width:214px;
        vertical-align:top;
        height:80px;
    }
    @media (max-width: 1440px) {
        nav ul{
            margin-right: 0px;
        }
    }

    & nav ul li{
        padding:0 20px;
    }

    @media (max-width: 768px) {        
        
        padding-top: 9px;
        padding-bottom: 7px;       

        & .pc-menu-container {
            display:none;
        }

        & .mo-menu-container {
            display:block;
        }          
    }    
`

const MoMenuStyle = styled.div`
    & .container {        
        display:flex;
        justify-content:center;
        align-items:center;
    }

    & .left {
        text-align:center;
        width:60px;
    }

    & .more {
        width:30px;
        height:30px;
    }

    & .right {
        text-align:center;
        width:60px;    
    }

    & .center {
        flex:1;
        text-align:center;        
    }

    & .logo {
        width: 170px;
        height: 63px;
    }

    /* menu */
    & .left nav {
        position:absolute;
        margin-top:23px;
        z-index:99999;
        background: linear-gradient(0deg, rgba(255,110,3,1) 6%, rgba(229,129,31,1) 95%);
        left:0;
        right:0;
        margin-right:15%;
        transform:translateX(-115%);
    }

    & .left ul {
        display:flex;
        flex-direction:column;
        width:100%;
        margin-top:0;
    }

    & .left li {
        text-align:left;
        padding:0;
    }

    & .left li:nth-child(1),
      .left li:nth-child(2),
      .left li:nth-child(3) {
        border-bottom:1px solid #ef9646;
    }

    & .left .ko {
        display:none;
    }

    & .left .x {
        width:30px;
        height:30px;
    }

    & .left a {
        font-size:13px;
    }

    & .left .x-container {
        position:absolute;
        top:10px;
        right:-40px;
    }

    & nav a {
        display:block;
        padding-top: 22px;
        padding-bottom: 22px;    
        padding-left: 10%;
    }

`;

function Item() {
    return (
        <ul>
            <li><Link to="/about">ABOUT US<div className="ko">센터소개</div></Link></li>
            <li><Link to="/trainer">TRAINER<div className="ko">트레이너</div></Link></li>
            <li><Link to="/program">TRAINING PROGRAMS<div className="ko">프로그램</div></Link></li>
            <li><Link to="/education">EDUCATION<div className="ko">교육</div></Link></li>
        </ul>
    )
}

function Header( props ) {

    const moMenuRef = useRef(null);
    const [moMenu,setMoMenu] = useState(true);

    function handleMoMenu (){
        setMoMenu(!moMenu);
        moMenuRef.current.style.transition = "all 0.8s ease-in-out";
        if(moMenu === true){
            moMenuRef.current.style.transform = `translateX(0%)`;
        }else{
            moMenuRef.current.style.transform = `translateX(-115%)`;
        }

        // 부모함수 호출
        if(moMenu == true ) props.onShowMask();
        else props.onHideMask();
    }

  return (
    <HeaderContainer>
        <div className="pc-menu-container">
            <div className="wrap inner-wrap">
                <h1><Link to="/"><img src={logo} alt="" /></Link></h1>
                <nav>
                    <Item></Item>
                </nav>
            </div>
        </div>
        <MoMenuStyle className="mo-menu-container">
            <div className="container">
                <div className="left">
                    <img src={more} className="more" onClick={handleMoMenu}></img>
                    <nav ref={moMenuRef}>                        
                        <Item></Item>
                        <div className="x-container" onClick={handleMoMenu}><img src={x} className="x"></img></div>
                    </nav>
                </div>
                <div className="center">
                    <Link to="/"><img src={logo} alt="" className="logo"/></Link>
                </div>
                <div className="right"></div>         
            </div>
        </MoMenuStyle>
    </HeaderContainer>
  );
}

export default Header;