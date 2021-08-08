import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import main_banner1 from '../images/main_banner1-min.png';
import main_banner2 from '../images/main_banner2-min.png';
import main_banner3 from '../images/main_banner3-min.png';
import main_banner4 from '../images/main_banner4-min.png';

const SliderContainer = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;

    .slider { 
        width: 100%;
        display: flex;
    }

    & .slide {
        text-align: center;
        height: 730px;
        flex: 0 0 100%;
        color: #fff;
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;

        @media (max-width: 1440px) {
            height:500px;
        }

        @media (max-width: 768px) { 
            height:320px;
        }
    }

    & .slide h3 {
        font-size: 60px;
        padding-top: 260px;

        @media (max-width: 1440px) {
            font-size: 60px;
            padding-top: 130px;        
        }

        @media (max-width: 768px) {
            font-size: 24px;
            padding-top: 116px;        
        }        
    } 

    & .slide h3 span{
        font-weight:300;   
    }
    & .slide1{
        background-image: url(${main_banner1});
    }

    & .slide2{
        background-image: url(${main_banner2});
    }

    & .slide3{
        background-image: url(${main_banner3});
    }    

    & .slide4{
        background-image: url(${main_banner4});
    } 

    & .slide p {
        font-size: 16px;
        padding-top: 40px;

        @media (max-width: 1440px) {
            padding-top: 20px;        
        }        

        @media (max-width: 768px) {
            font-size:10px;
            padding-top: 10px;        
        }                
    }
`

const PagerContainer = styled.div`
    position: absolute;
    bottom:50px;
    left:50%;
    transform: translateX(-50%);

    & span{
        display: inline-block;
        width:15px;
        height:15px;
        background-color: #7e7e7e;
        opacity: 0.7;
        margin: 0 15px;
        text-indent: -9999px;
        font-size: 0;
        color:transparent;
        border-radius: 50%;
    }

    & span:hover{
        cursor: pointer;
    }

    & span.active{
        background-color: #fff;
        opacity: 0.9;
    }

`

const CarouselComponent = ({slideItem}) =>{
  return (
    <div className={"slide "+slideItem.name}>
        <h3 dangerouslySetInnerHTML={ { __html: slideItem.label } }></h3>
        <p>{slideItem.detail}</p>
    </div>
  )
}

const TOTAL_SLIDES = 3;

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const [activePage, setActivePage] = useState(1);

    const slide1HTML = '휴병원 <span className="light">제휴</span> 스마트핏 부설';
    const slideItem = [
      {num : 1, name: "slide1", label : slide1HTML, detail : '전문의료기관 부설 스포츠 재활운동 전문센터'},
      {num : 2, name: "slide2", label : 'REHAB TO PERFORMANCE', detail : '부상으로 인한 선수들의 재활 트레이닝 회복 및 피지컬 트레이닝을 통한 체력 강화'},
      {num : 3, name: "slide3", label : 'PROFESSIONALISM', detail : '운동 목적에 맞는 다양한 운동 프로그램을 적용할 수 있는 전문 인력들로 구성'},
      {num : 4, name: "slide4", label : 'EDUCATION', detail : '부상 예방 및 재부상 방지를 위한 교육'}
    ]
    const slideContent = slideItem.map((slideItem, index)=> <CarouselComponent slideItem={slideItem} key={index} />);

    const pagerMenu = [
        {id : 1, text : "1"},
        {id : 2, text : "2"},
        {id : 3, text : "3"},
        {id : 4, text : "4"}
    ]
    
    const Pager = (() => {
        return (
            <PagerContainer>
                {
                    pagerMenu.map((item, index) => {
                        return <span key={index} className={activePage === item.id ? "active" : ''} onClick={() => {setActivePage(item.id); setCurrentSlide(index)}}>{item.text}</span>
                    })
                }
            </PagerContainer>
        )
    })
    
    useEffect(() => {
        slideRef.current.style.transition = "all 0.8s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
        setActivePage(currentSlide+1);
      }, [currentSlide]);
    
    setInterval(() => {
      
    }, 8000);

    useEffect(() => {
        
      const interval = setInterval(() => {
        if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
          setCurrentSlide(0);
      } else {
          setCurrentSlide(currentSlide + 1);
      }
      }, 4000);
      return () => {clearInterval(interval);
      }
    }, );

    return(
      <SliderContainer>
        <div className="slider" ref={slideRef}>
            {slideContent}
        </div>
        <Pager />
      </SliderContainer>
    )
}

export default Slider;