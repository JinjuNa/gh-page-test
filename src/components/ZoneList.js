import React from 'react';
import about1 from '../images/about1.png';
import about2 from '../images/about2.png';
import about3 from '../images/about3.png';
import about4 from '../images/about4.png';
import about5 from '../images/about5.png';
import about6 from '../images/about6.png';
import styled from 'styled-components';


const ZoneListContainer = styled.div`

    @media (max-width: 768px) { 
        margin:0 auto;
        /* width:90%; */
    }

    & ul {
        display:flex;
        flex-wrap: wrap;
        justify-content:space-between;

        @media (max-width: 768px) { 
            /* flex-direction:column; */
        }
    }
`

const ZoneItemContainer = styled.li`
    width:490px;
    height:520px;
    position: relative;

    @media (max-width: 768px) { 
        width:100%;
        height:auto;
        /* display:flex; */
        padding-top:30px;
    }

    & .body {
        @media (max-width: 768px) { 
            /* margin-left:10px; */
            margin-top:10px;
        }
    }

    .over {
        position:absolute;
        top:0;
        left:0;
        opacity: 0;        
    }

    & .img .crop {
        @media (max-width: 768px) { 
            /* width:135px; */
            height:100px;
            overflow:hidden;
        }            
    }

    & .img img {
        @media (max-width: 768px) { 
            width:100%;
            /* height:80px; */
        }
    }

    & .img:after {
        content: '${props => props.name}';
        color:#fff;
        font-size:30px;
        text-align:center;
        font-weight:700;
        line-height:264px;
        width:100%;
        height:264px;
        background-color:rgba(0,0,0,0.5);
        position: absolute;
        top:0;
        left:0;
        opacity: 0;
        transition: all 0.6s;

        @media (max-width: 768px) { 
            display:none;
        }
    }

    & .img:hover:after{
        opacity: 1;
    }

    & h4{
        font-size:24px;
        font-weight:500;
        margin-top:45px;
        margin-bottom:15px;

        @media (max-width: 768px) { 
            margin:0;
            font-size:14px;
            padding-bottom:5px;
        }        
    }

    & p {
        font-size:16px;
        color:#444;

        @media (max-width: 768px) { 
            margin:0;
            font-size:12px;
        }         
    }
`

function ZoneItem({data}){
    return (
        <ZoneItemContainer name={data.name}>
            <div className="img">
                <div className="crop">
                    <img src={data.img} alt={data.name}/>
                </div>
                <div className="over">
                    {data.name}
                </div>
            </div>
            <div className="body">
                <h4>{data.name}</h4>
                <p>
                    {data.text}
                </p>
            </div>
        </ZoneItemContainer>
    )
}


function ZoneList() {
    const zoneData = [
        {name : "웨이트 및 파워트레이닝 존", text : "기본적인 웨이트 기구부터, 카이져를 활용한 파워트레이닝 까지 가능한 공간입니다.", img : about1},
        {name : "필드 존", text : "잔디와 그물 및 스피드 매트가 설치된 공간입니다. 기본적인 육상 훈련뿐만 아니라 배팅, 투구 등과 같은 다양한 스포츠 퍼포먼스를 실제적으로 할 수 있는 공간입니다.", img : about2},
        {name : "유산소 존", text : "일반적인 트레드밀, 경사각도가 50도까지 올라가는 마이마운틴, 좌식 자전거, 수동 트레드밀인 스피드핏, 상체 근력운동과 하체 유산소를 같이 실시 할 수 있는 아반티, 로잉머신을 갖추고 있어서, 다양한 유산소를 회원들에게 맞추어서 제공할 수 있습니다.", img : about3},
        {name : "셀프 피티 존", text : "스마트핏이 자체 개발해서 프로 구단에서도 사용 중인 두써킷을 활용한 셀프 피티 존입니다. 선생님들이 정해준 프로그램 또는 회원분들께서 하고 싶은 운동 프로그램을 설정해서, 스트레칭에서부터 다양한 소도구들을 활용한 운동을 써킷으로 할 수 있는 공간입니다. 선생님과 운동 스케줄이 없는 날에도 언제든지 프로그램을 이용 할 수 있습니다.", img : about4},
        {name : "스트레칭 존", text : "매트, 라드 등을 활용한 스트레칭 등 및 셀프 근막 이완 등을 할 수 있는 독립적인 공간입니다.", img : about5},
        {name : "뉴트리션 존", text : "회원분들의 영양을 위해서 보충제 제공 및 판매를 하는 공간입니다. 선생님들과의 전문적인 상담을 통해서 회원분들에게 맞춤식 영양을 제공하고 있습니다.", img : about6},
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