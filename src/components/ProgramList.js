import React from 'react';
import program1 from '../images/program1-min.png';
import program2 from '../images/program2-min.png';
import program3 from '../images/program3-min.png';
import program4 from '../images/program4-min.png';
import program5 from '../images/program5-min.png';
import program6 from '../images/program6-min.png';
import program7 from '../images/program7-min.png';
import program8 from '../images/program8-min.png';
import program9 from '../images/program9-min.png';
import program10 from '../images/program10-min.png';
import styled from 'styled-components';


const ZoneListContainer = styled.div`
    margin-top:135px;

    @media (max-width: 768px) {
        margin-top:0;
    }
`

const ZoneItemContainer = styled.li`
    display:flex;
    justify-content:space-around;
    align-items: center;
    padding-top:100px;
    padding-bottom:100px; 

    @media (max-width: 768px) {
        flex-direction:column;
        padding:0;
        margin:0;
    }    

    & div {
        display:inline-block;
    }

    & div:nth-child(1){
        width:35%;
        @media (max-width: 768px) {
            width:100%;   
            margin-top:30px;         
        }
    }

    & div:nth-child(1) img{
        width:100%;    
    }

    & div:nth-child(2){
        width:60%;
        @media (max-width: 768px) {      
            width: 100%;      
        }        
    }
    & h4 {
        font-size:24px;
        font-weight:500;
        margin-top:45px;
        margin-bottom:45px;

        @media (max-width: 1440px) {
            margin-top:0;
            margin-bottom:15px;
            font-size:16px;
            text-align:center;
            padding-top:10px;
        }
    }

    & span {
        display:inline-block;
        font-size:16px;
        line-height:24px;
        word-break:keep-all;

        @media (max-width: 1440px) {
            display: inline;    
            font-size:12px;        
        }             

        @media (max-width: 768px) {     
            display: inline-block;   
            line-height:18px;
        }
    }

    br{
        display:block;
        height:50px;
        width:100%;

        @media (max-width: 768px) {      
            display:none;
        }  
    }

    .margin{
        height:10px;
    }           
`

function ZoneItem({data}){
    return (
        <ZoneItemContainer id={data.id}>
            <div>
                <img src={data.img1} alt={data.name}/>
                <img src={data.img2} alt={data.name}/>
            </div>
            <div className="text">
                <h4>{data.name}</h4>
                {
                    data.text1.split('\n').map( line => {
                        return (<span>{line}<br /></span>)
                    })
                }
                <p className="margin"/>
                {data.text2 ?
                   data.text2.split('\n').map( line => {
                    return (<span>{line}<br /></span>)
                }) : ''
                }
                <p className="margin"/>
                {data.text3 ?
                   data.text3.split('\n').map( line => {
                    return (<span>{line}</span>)
                }) : ''
                }
            </div>
        </ZoneItemContainer>
    )
}


function ZoneList() {
    const zoneData = [
        {   
            id : 1,
            name : "스포츠 재활 프로그램", 
            text1 : `피지컬 베이스의 재활 프로그램은 다양한 평가 기반을 통해서 선진 운동과학 이론에 근거한 프로그램을 제공합니다.
                    전문적인 선생님들이 일주일에 정해진 스케줄에 운동 프로그램을 제공해줄 것이며, 운동 스케줄이 없는 날에도 자유롭게 방문해서 ICT 기반 프로그램인 두써킷을 활용한 재활 운동이 가능합니다.
                    운동 프로그램 외에도 수기관리, 그라스톤, 엔더몰로지와 같은 전문적인 관리 방법들을 선택해서 이용 가능합니다.`, 
            img1 : program1, 
            img2: program2 
        },
        {   
            id : 2,
            name : "스포츠 퍼포먼스 프로그램", 
            text1 : `피지컬 베이스의 스포츠 퍼포먼스 프로그램은 재활에서 퍼포먼스 트레이닝까지 원스톱 서비스를 제공하며 다음과 같은 차별화를 두고 있습니다.`, 
            text2 : `1) ICT 스포츠 융복합 기술을 활용한 선수 개개인의 특성에 맞는 효율적인 트레이닝 제공
                    2) 국내외 스포츠 재활센터와 MOU를 통한 선진 운동과학 이론에 근거한 트레이닝 제공
                    3) 재부상 방지를 위한 스포츠 재활 교육기관과 협력을 통한 지속적인 지도자 교육 및 관리`,
            text3 : `이와 같은 차별적인 프로그램을 선수들이 센터에 들어와서 나갈 때까지 전문적인 코치진들이 지도해주고 있습니다.
                    스포츠 퍼포먼스 프로그램 안에는 움직임 트레이닝, 부상 후 재활 및 재교육, 스피드, 민첩성, 폭발적인 파워, 적절한 기능적 근력 및 에너지 시스템 등을 포함하고 있습니다. 
                    이러한 프로그램의 실현을 위해서 카이져, 파워 플레이트 등과 같은 최신 장비를 갖추고 있으며, 배팅이나 전력 질주와 같은 실제 스포츠 퍼포먼스 구현을 위해  인조잔디로 구성된 필드가 마련되어 있습니다. 
                    스포츠 퍼포먼스 향상을 위해서 저희 센터를 방문하신다면, 다른 센터와 분명한 차이를 경험하실 것입니다.`,
            img1 : program3, 
            img2: program4 
        },
        {   
            id : 3,
            name : "퍼스널 트레이닝 프로그램", 
            text1 : `개개인의 목적에 맞는 트레이닝을 전문적으로 받고 싶으시다면, 저희 피지컬 베이스의 퍼스널 트레이닝이 최고의 선택일 것입니다.
                    모든 퍼스널 트레이닝 회원들은 건강 상담 및 목적에 맞는 전신 움직임 평가 등을 받게 됩니다. 
                    피지컬 베이스의 트레이너들은 다이어트에서부터 재활에 이르는 넓은 범위에 대한 전문적인 지식을 갖추고 있어서, 여러분들이 원하는 목표를 빠른시간 내에 도달할 수 있게 만들어 드립니다.
                    그리고 선생님과 운동 스케줄이 없는 날에도 두써킷을 활용한 운동 프로그램을 사용해서 매일 전문적인 운동을 지도받게 해드립니다.`, 
            img1 : program5, 
            img2: program6 
        },
        {   
            id : 4,
            name : "엘리트 선수 전문 그룹운동", 
            text1 : `유소년 및 중 고교 엘리트 선수들의 팀 운동을 위한 프로그램입니다. 
                    90분 동안 기본 체력, 밸런스, 파워 등과 같은 운동 에서부터 필드 존에서 스킬 훈련까지 그룹으로 진행합니다.`, 
            img1 : program7, 
            img2: program8 
        },
        {   
            id : 5,
            name : "그룹피티", 
            text1 : `1000가지 이상의 운동 동작이 내장된 두써킷을 활용한 그룹 피티 프로그램입니다. 
                    다수의 인원과 수업이 진행되지만 1:1 PT를 받는 것과 동일한 효과를 볼 수 있습니다. 
                    또한 어플과 연동된 심박계를 통해서 자신의 심박수를 체크하면서 운동이 가능합니다.`, 
            img1 : program9, 
            img2: program10 
        }
        
    ]
  return (
    <ZoneListContainer>
        <ul>
            {zoneData.map((zoneData)=> {
                console.log(zoneData);
                    return (
                        <ZoneItem data = {zoneData}/>
                    )
                })
            }
        </ul>
    </ZoneListContainer>
  );    
}

export default ZoneList;