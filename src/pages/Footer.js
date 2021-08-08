import React from 'react';
import styled from 'styled-components';
import footer_logo from '../images/logo_white.svg';

const FooterContainer = styled.footer`
  background-color : #3e3b3b;
  padding-top:120px;
  padding-bottom:100px;
  
  @media (max-width: 768px) { 
    padding-top: 0px;
    padding-bottom: 30px;
  }
    
  & .inner-wrap{
    display:flex;
    justify-content:space-between;
    width: 1360px;

    @media (max-width: 1440px) {
      width: 1000px;
    }

    @media (max-width: 768px) { 
      flex-direction:column;
      width:80%;
    }    
  }

  & .footer-left {
    flex-basis: 675px;
    margin-top:10px;
    @media (max-width: 1440px) {
      /* flex-basis:auto; */
      
      flex-basis: 520px;
      margin-right:20px;
    }    
    @media (max-width: 768px) {
      flex-basis:auto;
      order:1;
    }        
  }

  & .service-center {
    font-size:35px;
    color : #fff;
    border-bottom: 3px solid #fa7207;
    padding-bottom:30px;
    margin-bottom: 35px;

    @media (max-width: 768px) { 
      padding-top:20px;
      font-size:18px;
      font-weight:700;
      padding-bottom:20px;
      margin-bottom: 25px;
    }
  }
  & .copyright{
    /* & br {
      display:none;
      @media (max-width: 768px) { 
        display:block;
      }
    } */
    color : #969595;
    @media (max-width: 768px) { 
      order:0;
      font-size:12px;
    }    
  }

  & .footer-right {
    flex-basis : 520px;

    @media (max-width: 768px) { 
      flex-basis:auto;
      padding-top:10px;
    }    
  }

  & .footer-right img{
    width:200px;
    height:75px;
    @media (max-width: 768px) { 
      width:150px;
    }    
  }

  & .map-api{
    height:320px;

    @media (max-width: 768px) { 
      height:150px;
    }    
  }
`

// const FooterNav = styled.div`
//     color: #fff;
//     font-size:18px;
//     margin-top:50px;

//     & ul{
//       display: flex;
//     }

//     & ul li{
//         margin-right:26px;
//     }
// `
function Footer() {
  return (
    <FooterContainer>
      <div className="inner-wrap">
        <div className="footer-left">
          <div className="service-center">
            고객센터 051-816-9679<br />
            운영시간 평일 08:00~22:00
          </div>

          <div className="copyright">
          (주)피지컬 베이스 트레이닝 센터 | 대표자 : 박일봉<br />
          {/* (주)피지컬 베이스 트레이닝 센터 대표자 : 박일봉 | 개인정보 책임자 : 노근역<br /> */}
          부산광역시 부산진구 신천대로 252,일성인포아파트 주상복합상가 4층<br />
          사업자등록번호 : 126-86-82778<br />
          대표전화 : 051-816-9679 | FAX : 051-518-9643<br />
          Copyright ＠2020 physical base training center all rights reserved.<br />
          </div>

          {/* <FooterNav>
            <ul>
                  <li><a href="/">회사소개</a></li>
                  <li><a href="/">공지사항</a></li>
                  <li><a href="/">이용약관</a></li>
                  <li><a href="/">교육이용약관</a></li>
                  <li><a href="/">개인정보취급방침</a></li>
                  <li><a href="/">자주하는 질문</a></li>
              </ul>
          </FooterNav> */}
        </div>
        <div className="footer-right">
          <img src={footer_logo} alt="피지컬 베이스 로고" />
          <div className="map-api">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d407.7104231112429!2d129.0506361!3d35.1645162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568ebfe65e96a15%3A0x25ec45955163b0b3!2z7ZS87KeA7Lus67Kg7J207Iqk!5e0!3m2!1sko!2skr!4v1592369449905!5m2!1sko!2skr" width="100%" height="100%" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;