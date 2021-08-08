import React from 'react';
import SubTitle from '../components/SubTitle';
import trainer_banner from '../images/trainer_banner-min.png';
import trainer1 from '../images/trainer1-min.png';
import trainer2 from '../images/trainer2.png';
import trainer3 from '../images/trainer3.png';
import trainer4 from '../images/trainer4.png';
import sign from '../images/sign.png';
import styled from 'styled-components';
import TrainerInfo from '../components/TrainerInfo';

const TrainerContainer = styled.div`
    width: 1150px;
    margin:75px auto 160px auto;

    @media (max-width: 1440px) {
      width: 1000px;
    }

    @media (max-width: 768px) {
      width: 80%;      
      margin: 0 auto;
      padding-top:30px;
    }    

    & br {
        @media (max-width: 768px) {
            display:none;
        }           
    }

    & h3{
      text-align:center;
      font-size:28px;
      margin-bottom:25px;
      
      @media (max-width: 768px) {
        font-size:16px;
      }          
    }

    & section>p{
      text-align: center;
      margin-bottom:80px;
      font-size:16px;
      
      @media (max-width: 768px) {
        font-size:12px;
        margin-bottom:40px;
      }                
    }

    & h4.f-28{
      font-size:28px;
      font-weight:normal; 
      @media (max-width: 768px) {
        font-size:16px;
      } 
    }

    & .trainer-top {
        display:flex;
        justify-content:space-between;
        align-items:center;

        @media (max-width: 768px) {
            flex-direction:column;
        }            
    }
    & .trainer-img {
        flex-basis: 50%;
    }
    & .trainer-img img{
        width:100%;
    }
    & .trainer-bottom{
        margin: 110px 0;
        @media (max-width: 768px) {
            margin:0;
        }        
    }
    & .trainer-text{
        flex-basis : 45%;
        
        @media (max-width: 768px) {
            margin-top:5px;
        }          
    }

    & .trainer-text p{
        color : #4b4b4b;
        margin-top:10px;
        word-break:keep-all;

        @media (max-width: 768px) {
            font-size:12px;
        }         
    }

    & .trainer {
        @media (max-width: 768px) {
            margin-bottom:40px;
        }
    }

    & .trainer-text .myeongjo{
        position:relative;
        height:80px;
        margin-top:15px;   
        @media (max-width: 768px) {
            margin-top:20px;
            height:auto;
        }                
    }

    & .trainer-text .gray {
        color : #999;
        position:absolute;
        top:0;
        left:0px;       
        @media (max-width: 1440px) {
            top:-10px;
        }
        @media (max-width: 768px) {
            top:-12px;
            font-size:10px;
        }           
    }

    & .trainer-text .myeongjo .name{
        font-family: 'Nanum Myeongjo', serif;
        font-size:45px;
        margin-right:15px;    

        @media (max-width: 1440px) {
            font-size:30px;
        }          

        @media (max-width: 768px) {
            font-size:16px;
        }       
    }

    & .trainer-text .myeongjo img{
        vertical-align:bottom;
        @media (max-width: 1440px) {
            width:80px;
        }  
        @media (max-width: 768px) {
            width:40px;
        }                  
    }

    & .trainer-text .orange{
        color:#fa7207;
        font-size:28px;
        padding : 10px 0;
        @media (max-width: 768px) {
            font-size:14px;
        }         
    }

    & .responsive-br {
        @media (max-width: 1440px) {
            display:none;
        }
    }
 
    & .trainer-info{
        display:flex;
        justify-content : space-around;
        @media (max-width: 768px) {
            flex-direction:column;
            padding-top:20px;
        }                
    }

    & .trainer-info-left{
        flex-basis:50%;
        padding-left:20px;
        @media (max-width: 768px) {
            padding:0;
        }                        
    }

    & .trainer-info-rigth{
        flex-basis:45%;
        /* padding-left:50px; */
        @media (max-width: 768px) {
            padding:0;
            margin-top:20px;
        }      
    }

    & .trainer-info-left-top{
        margin-bottom:20px;
    }

    & .line {
        height :1px;
        background-color: #dadada;
        margin-bottom : 130px;
        margin-left : -15%;
        margin-right : -15%;

        @media (max-width: 768px) {
            margin-bottom : 50px;
            margin-left : -5%;
            margin-right : -5%;
        }
    }
`

function Trainer() {
    const trainer1_1 = {
        title : "학력",
        list : [
            "- 동아대학교 체육대학 사회체육학과 졸업",
            "- 동아대학교 대학원 체육학전공 석사학위 이수",
            "- 동아대학교 대학원 체육학전공 이학박사 학위 이수",
            "- 부산가톨릭대학교 물리치료학과 졸업",
            "- 부산대학교 의학전문대학원 의학 석사학위 이수",
            "- 부산대학교 의학전문대학원 의학 박사학위 이수",
            "- 부산대학교 경영대학원 경영컨설팅학 박사 학위 이수"
        ]
    }

    const trainer1_2 = {
        title : "경력",
        list : [
            "- 현 부산 외국어대학교 대학원 스포츠 재활학과 주임교수",
            "- 현 (주)스마트핏 대표이사",
            "- 현 (주)스마트핏 운동센터 대표",
            "- 현 (사)대한재활기능운동협회(KARFE) 협회장",
            "- 현 NC다이노스 프로야구단 트레이닝 디렉터"
        ]
    }

    const trainer1_3 = {
        title : "자격",
        list : [
            "- 응급처치법 강사 [대한적십자사]",
            "- 물리치료사 면허증 [보건복지가족부장관]",
            "- BLS-Provider [American Heart Association]",
            "- ACLS-Provider [American Heart Association]",
            "- BLS-Instructor [American Heart Association]",
            "- PALS-Provider [American Heart Association]",
            "- 생활체육지도자 3급 보디빌딩 [문화관광부]",
            "- 운동사 [(사)대한운동사회]",
            "- 생활체육 지도자 3급 스쿼시 [문화관광부]",
            "- 생활체육 지도자 3급 수영 [문화관광부]",
            "- 생활체육 지도자 3급 축구 [문화관광부]",
            "- 생활체육 지도자 3급 야구 [문화관광부]",
            "- NASM - CPT [미국스포츠의학회(국가 공인)]",
            "- NASM - CES [미국스포츠의학회(국가 공인)]",
            "- NASM - PES [미국스포츠의학회(국가 공인)]",
            "- 건강 운동관리사 [문화관광부]"
        ]
    }

    const trainer2_1 = {
        title : "학력",
        list : [
            "- 인제대학교 물리치료학과 졸업",
            "- 경성대학교 체육교육 석사 졸업",
            "- 부산 외국어대학교 스포츠 건강융합 박사과정 수료"
        ]
    }

    const trainer2_2 = {
        title : "경력",
        list : [
            "- 전 황융성 재활의학과 재활치료실",
            "- 전 나눔과 행복병원 재활치료실",
            "- 전 (주)스마트핏 메트로자이점 점장",
            "- 전 부산외국어대학교 겸임교수",
            "- 현 (사)KARFE 교육 이사",
            "- 현 피지컬 베이스 운동센터 센터장",
            "- 재활 기능 운동학(한미의학), 펑셔널 트레이닝(스마트핏),",
            "임상 재활 치료학(영문출판사) 공역"
        ]
    }

    const trainer2_3 = {
        title : "자격",
        list : [
            "- 물리치료사 [보건복지부]",
            "- KEMA Introduction, Advance, Research Course",
            "- Bobath Introduction, Movement Analysis Course",
            "- DNS A, B, C, Scoliosis, Foot, Yanda’s Course",
            "- P-DTR Course",
            "- RAD Master Course",
            "- Gray Institute 3D Maps, CAFS, Master Course",
            "- 3D Anatomy Course",
            "- 상해 카데바 해부실습",
            "- TRX, Vipr, Freeform, Trigger-Point, Smrt-Core, Powerplate Course",
            "- SCHROTH Introduction, Level A Course",
            "- NASM CPT, CES, PES Course",
            "- Proprioception Specialist Course",
            "- STC Basic Course"
        ]
    }

    const trainer3_1 = {
        title : "학력",
        list : [
            "- 건국대학교 체육학과 졸업",
            "- 부산외국어대학교 스포츠 재활학 석사과정"
        ]
    }

    const trainer3_2 = {
        title : "경력",
        list : [
            "- 전 경기 광주시청 펜싱팀 선수",
            "- 전 더 피트니스 우성 트레이너",
            "- 전 E-Fit Studio 팀장",
            "- 전 스마트 핏 트레이너",
            "- 현 피지컬 베이스 운동센터 팀장",
            "- 2017 비시즌 NC 임창민, 이훈, 박민주 전) KT고창성 트레이닝",
            "- 2018 비시즌 두산 이현승, 함덕주, 변진수 롯데 노경은, SK 신재웅, ",
            " 김세현 삼성 김민수 트레이닝",
            "- 2019 비시즌 두산 박치국, 함덕주, SK 김세현 트레이닝"
        ]
    }

    const trainer3_3 = {
        title : "자격",
        list : [
            "- STC Master course",
            "- CFSC Lv.2 course",
            "- FRCms course",
            "- GFM Lv1 course",
            "- SFMA, FMS course",
            "- NASM CES, CPT, PES course",
            "- IFPA PFT course, TFC course, NMT course",
            "- DNS foot course, SPCS, SMTS course",
            "- 산전, 산후 운동지도사, DST course",
            "- Preprioception Specialist",
            "- Movement Variability",
            "- Manual therapy & Joint M. Techniques",
            "- Manual therapy & Joint M. Techniques",
            "- BOSU, Keiser, Vibrogym, Trigger Point, Freeform course",
            "- 2급 생활 스포츠 지도사 (보디빌딩), 2급 전문 스포츠 지도사 (펜싱)"
        ]
    }

    const trainer4_1 = {
        title : "학력",
        list : [
            "- 부산 고등학교 졸업",
            "- 송원대학교 사회체육학과"
        ]
    }

    const trainer4_2 = {
        title : "경력",
        list : [
            "- 전 야구선수",
            "- 전 국가대표 AT센터 트레이너",
            "- 전 스마트핏 센텀시티점 트레이너",
            "- 현 피지컬 베이스 운동센터 코치"
        ]
    }

    const trainer4_3 = {
        title : "자격",
        list : [
            "- 대한 스포츠 의학회(kssm) 정회원",
            "- 대한선수트레이너협회(R-KATA) 연수 교육 수료",
            "- 대한선수트레이너협회(R-KATA) 정회원",
            "- 선수 트레이너 자격증(Athletic Trainer Certificate)",
            "- 전문스포츠 지도사 자격증(야구)",
            "- 스포츠 테이핑 2급",
            "- 스포츠 마사지 2급",
            "- 스트렝스 트레이닝&코디네이션(STC)"
        ]
    }
  return (
    <main>
        <SubTitle img={trainer_banner} title="TRAINER"/>
        <div className="inner-wrap">
        <TrainerContainer>
            <section>
            <h3>피지컬 베이스 팀을 소개합니다!</h3>
            <p>선수트레이닝, 재활, 피지컬, 퍼스널트레이닝, 컨디셔닝 등의 영역에서 최고의 전문가들로 구성된 저희 팀원들이<br />
            회원 여러분들이 원하는 목표의 시작부터 끝까지 최선을 다해서 지도하겠습니다. 
            </p>
            <div className="trainer">
                <div className="trainer-top">
                    <div className="trainer-img">
                        <img src={trainer1} alt="박일봉" />
                    </div>
                    <div className="trainer-text">
                        <h4 className="f-28">대표 <strong>박일봉</strong></h4>
                        <p>
                        안녕하십니까<br />
                        주식회사 피지컬 베이스 운동센터 박일봉 대표입니다.<br />
                        다년간 체육관련 학과 교수로 재직하여 미래 스포츠 지도자들을 가르치고, 현장에서 스포츠 선수들을 지도하고 케어하며, 현재도 프로팀에서 피지컬 스트렝스, 스포즈 재활 분야를 책임지고 있습니다.<br />
                        올림픽, 월드컵을 개최하고 세계적인 선수들을 배출하는 스포츠 강국이지만 프로스포츠의 초석인 엘리트 스포츠 성장에 필요한 트레이닝 환경, 과학적인 근거 기반의 체계적인 트레이닝 시스템이 많이 미흡한 실정입니다.<br />
                        이에 스포츠선수들을 위한 전문 트레이닝 시설, 시스템을 제공하고자 본 회사를 설립하였습니다.<br />
                        <br className="responsive-br"/>
                        NC다이노스 야구단의 스트렝스 파트 디렉터로서 스포츠 손상에 따른 재활 트레이닝에서부터 필드 복귀를 위한 퍼포먼스 트레이닝까지 스포츠선수에 최적화된 트레이닝을 제시하고 산학협력을 통한 지역 엘리트 스포츠 발전을 위해 노력할 것입니다.<br />
                        <br className="responsive-br"/>
                        스포츠인의 자긍심으로 사람을 위하고, 대한민국을 위하는 지혜를 공유하며 스포츠 발전에 앞장서는 기업으로 성장할 것입니다. <br />
                        <br className="responsive-br"/>
                        감사합니다. 
                        </p>
                        <p className="myeongjo"><span className="gray">대표이사</span><span className="name">박일봉</span><img src={sign} alt="박일봉"/></p>

                    </div>
                </div>
                <div className="trainer-bottom">
                    <div className="trainer-info">
                        <div className="trainer-info-left">
                            <div className="trainer-info-left-top">
                                <TrainerInfo data={trainer1_1}/>
                            </div>
                            <div className="trainer-info-left-bottom">
                                <TrainerInfo data={trainer1_2}/>
                            </div>
                        </div>
                        <div className="trainer-info-rigth">
                            <TrainerInfo data={trainer1_3}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="trainer">
                <div className="trainer-top">
                    <div className="trainer-img">
                        <img src={trainer2} alt="김동우" />
                    </div>
                    <div className="trainer-text">
                        <h4 className="f-28">센터장 <strong>김동우</strong></h4>
                        <p className="orange">“올바른 움직임이 좋은 기능을 만든다.”</p>
                        <p>
                        우리의 몸은 현재 내가 움직이고 있는 범위에서의 모든 정보들을 기억합니다.<br />
                        피지컬부터 재활에 이르는 모든 회원분들의 올바른 움직임을 바로 세울 수만 있다면, 그것이 최고의 트레이닝이라고 생각합니다.<br />
                        이러한 철학과 재활병원의 임상 경험 및 운동센터 트레이너의 경험을 토대로 회원분들이 원하는 운동 목적을 충족 시켜드리겠습니다. 
                        </p>
                    </div>
                </div>
                <div className="trainer-bottom">
                    <div className="trainer-info">
                        <div className="trainer-info-left">
                            <div className="trainer-info-left-top">
                                <TrainerInfo data={trainer2_1}/>
                            </div>
                            <div className="trainer-info-left-bottom">
                                <TrainerInfo data={trainer2_2}/>
                            </div>
                        </div>
                        <div className="trainer-info-rigth">
                            <TrainerInfo data={trainer2_3}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="trainer">
                <div className="trainer-top">
                    <div className="trainer-img">
                        <img src={trainer3} alt="김태곤" />
                    </div>
                    <div className="trainer-text">
                        <h4 className="f-28">팀장 <strong>김태곤</strong></h4>
                        <p className="orange">“이해함에 진정한 정진이 가능하다.”</p>
                        <p>
                        중학생 때부터 실업팀까지 펜싱 선수로서의 운동선수 생활을 해왔고 일반인부터 엘리트 선수, 프로 선수들을 대상으로 10년 이상의 트레이닝을 지도했습니다.<br />
                        그리고, STC Master, CFSC Lv2, NASM PES 등의 트레이닝 관련 교육 및 자격 과정을 거치면서 적재적소에 효율적인 트레이닝을 적용해 왔습니다.<br />
                        저는 결과만을 중요시하는 것보다는 과정을 이해 시켜 드리는 것이야말로 "진짜" 트레이닝이라고 생각합니다.
                        </p>
                    </div>
                </div>
                <div className="trainer-bottom">
                    <div className="trainer-info">
                        <div className="trainer-info-left">
                            <div className="trainer-info-left-top">
                                <TrainerInfo data={trainer3_1}/>
                            </div>
                            <div className="trainer-info-left-bottom">
                                <TrainerInfo data={trainer3_2}/>
                            </div>
                        </div>
                        <div className="trainer-info-rigth">
                            <TrainerInfo data={trainer3_3}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="trainer">
                <div className="trainer-top">
                    <div className="trainer-img">
                        <img src={trainer4} alt="김태형" />
                    </div>
                    <div className="trainer-text">
                        <h4 className="f-28">코치 <strong>김태형</strong></h4>
                        <p className="orange">“혼이 담긴 노력은 절대 배신하지 않는다.”</p>
                        <p>
                        저는 엘리트 야구선수로 10년 이상의 생활을 해왔습니다.<br />
                        선수 생활 동안 느끼고 배웠던 경험과 다양한 교육 과정을 통해서 배운 지식을 결합하여 개개인의 특이성과 목적에 맞는 트레이닝을 적용해 회원분들께서 원하는 목적에 최대한의 결과를 낳을 수 있도록 도움을 드리겠습니다.
                        </p>
                    </div>
                </div>
                <div className="trainer-bottom">
                    <div className="trainer-info">
                        <div className="trainer-info-left">
                            <div className="trainer-info-left-top">
                                <TrainerInfo data={trainer4_1}/>
                            </div>
                            <div className="trainer-info-left-bottom">
                                <TrainerInfo data={trainer4_2}/>
                            </div>
                        </div>
                        <div className="trainer-info-rigth">
                            <TrainerInfo data={trainer4_3}/>
                        </div>
                    </div>
                </div>
            </div>
            </section>

        </TrainerContainer>
        </div>
    </main>
  );
}

export default Trainer;