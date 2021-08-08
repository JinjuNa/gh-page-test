import React from 'react';
import styled from 'styled-components';

const TrainerInfoContainer = styled.div`
    & .trainer-info-title{
        font-weight:800;
        @media (max-width: 768px) {
            font-size:14px;
        }
    }

    & ul {
        @media (max-width: 768px) {
            margin-top:5px;
        }
    }

    & li {
        @media (max-width: 768px) {
            font-size:12px;            
        }
    }

    & ul l i{
        color : #4b4b4b;
    }
`

function TrainerInfo({data}) {
  return (
    <TrainerInfoContainer>
        <p className="trainer-info-title">{data.title}</p>
        <ul>
            {data.list.map((list, index)=> {
                    return (
                        <li key={index}>{list}</li>
                    )
                })
            }
        </ul>
    </TrainerInfoContainer>
  );    
}

export default TrainerInfo;