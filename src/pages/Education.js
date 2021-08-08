import React from 'react';
import SubTitle from '../components/SubTitle';
import education_banner from '../images/education_banner-min.png';
import education_karfe from '../images/education_karfe.png';
import education1 from '../images/education1.png';
import education2 from '../images/education2.png';
import education_notice1 from '../images/education_notice1.jpg';
import education_notice2 from '../images/education_notice2.jpg';
import styled from 'styled-components';

const EducationContainer = styled.div`
    width: 1150px;
    margin:75px auto 160px auto;

    @media (max-width: 1440px) {
      width: 1000px;
    }

    @media (max-width: 768px) {
      width: 90%;
      margin: 0 auto;     
      padding-bottom:30px; 
    }    

    & h3{
      text-align:center;
      font-size:28px;
      margin-bottom:25px;
      margin-top:20px;
      @media (max-width: 768px) {
        font-size:14px;        
        margin-top:10px;        
      }         
    }

    & h3 img{
      @media (max-width: 768px) {
        width:100px;       
      } 
    }

    & section{
        margin-top:80px;
        @media (max-width: 768px) {
          margin-top:40px;        
        }         
    }

    & section>p{
        text-align:center;
        @media (max-width: 768px) {
          font-size:12px;    
          width:88%;      
          margin: 0 auto;
        }               
    }

    & p br {
      @media (max-width: 768px) {
        display:none;
      }   
    }

    & section>img{
        width:100%;
    }

    & .orange-link{
        text-decoration:underline;
        text-underline-position: under;
        color : #fa7207;
        margin-top:30px;
        line-height:30px;
        @media (max-width: 768px) {
          margin-top:15px;
          line-height:15px;
        }        
    }

    & .orange-text{
      color : #fa7207;
      margin-top:85px;
      margin-bottom: 50px;
      font-style : italic;
    }

    & .orange-text br {
      @media (max-width: 768px) {
        display:block;
      }   
    }

    & .notice-img{
      text-align:center;
      margin-top:50px;
      @media (max-width: 768px) {
          margin-bottom:100px;
          width : 100%;
        }    
    }

    & .notice-img img{
      width : 50%;
      display : inline-block;
      @media (max-width: 768px) {
          width:100%;
        }    
    }

`

function Education() {
  return (
    <main>
        <SubTitle img={education_banner} title="EDUCATION"/>
        <div className="inner-wrap">
            <EducationContainer>
                <section>
                <h3><img src={education_karfe} alt="카르페" /></h3>
                <img src={education1} alt="카르페 홈페이지" />
                <h3>카르페</h3>
                <p>CFSC, DNS, STC 외 다양한 국내 및 국외 교육 프로그램을 실시하고 있습니다.<br />
                자세한 교육 프로그램 정보 및 내용은 아래 홈페이지 주소를 참고해주세요.
                </p>
                <p className="orange-link"><a href="http://www.karfe.org" target="_blank" rel="noopener noreferrer">http://www.karfe.org</a></p>
                </section>
                <section>
                <img src={education2} alt="건강증진교실" />
                <h3>건강증진교실</h3>
                <p>매주 목요일 다양한 주제로 건강증진 교실을 운영하고 있습니다.<br />
                건강에 관심 있으신 누구나 무료로 참석 가능합니다.<br />
                세부 일정 및 내용은 아래 스케줄 표를 참고 해주세요.
                </p>
                {/* <p className="orange-text">
                건강한 삶을 위한 무료 건강증진강좌<br />
                일시 : 2020.06.25 목요일 오후 4시<br />
                장소 : 피지컬베이스 세미나실<br />
                정원 : 선착순 30명<br />
                문의 및 접수 : 051. 816. 9679
                </p> */}
                <div className="notice-img">
                  <img src={education_notice1} alt="건강증진강좌" />
                  <img src={education_notice2} alt="건강증진강좌" />
                </div>
                </section>
            </EducationContainer>
        </div>
    </main>
  );
}

export default Education;