import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsCheckLg } from "react-icons/bs";
import { memo } from 'react';

interface Props{
    id: number;
    title: string;
    nameBusiness: string;
    points: number;
    pointsNeeded: number;
}

function Card({title, points, pointsNeeded, nameBusiness, id}: Props) {

    const navigate = useNavigate();

    const check = new Array(points).fill(0);
    const noCheck = new Array(pointsNeeded - points).fill(0);

    return (
        <Container>

            <h1 onClick={ () => navigate(`/infoCard/${id}`)}>{title}</h1>
            <div className="pontos">
                
                { check.map(point => {return <BsCheckLg className="check" />}) }
                { noCheck.map(point => {return <div className="ponto"></div>}) }
                                
            </div>
            <p>{nameBusiness}</p>
            
        </Container>
    )
}

const Container = styled.div`


        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 3px solid #DA7422; 
        box-shadow: 0px 0px 10px  #DA7422;

        padding: 20px;
        margin-bottom: 20px;
        border-radius: 10px;
        
        width: 80%;

        h1{
            font-size: 20px;
            text-align: center;
            color: #2C5530;
            font-family: 'Alfa Slab One', cursive;
            padding-bottom: 10px;
            border-bottom: 1px solid #DA7422;
            font-weight: 400;
            width: 100%;

            &:hover{
                cursor: pointer;
            }
        }
        .pontos{
            display: flex;
            flex-wrap: wrap;
            margin-top: 10px;
            justify-content: space-around;
            overflow-x: hidden;
            width: 100%;
            align-items: center;
            .ponto{
                width: 40px;
                height: 40px;
                margin: 10px;
                border-radius: 50%;
                background-color: #8e9a90;
                
            }
            .check{
                font-size: 40px;
                color: #3e864a;
                margin: 10px;
            }
        }

        p{
            font-size: 19px;
            color: #DA7422;
            font-family: 'Alfa Slab One', cursive;
            font-weight: 400;
            text-align: right;
            width: 100%;
        }
    
`

export default memo(Card);