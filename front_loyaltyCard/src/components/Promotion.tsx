import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsCheckLg } from "react-icons/bs";

interface Props{
    promotionId: number;
    title: string;
}

function Promotion({promotionId, title}: Props) {

    const navigate = useNavigate();

    return (
        <Container>

            <h1 onClick={ () => navigate(`/addPoints/${promotionId}`)}>{title}</h1>

            
        </Container>
    )
}

const Container = styled.div`


        display: flex;
        flex-direction: column;
        justify-content: center; 
        background-color: #3e864a;
        align-items: center;
        border: 3px solid #2C5530; 
        box-shadow: 0px 0px 10px  #DA7422;

        padding: 20px;
        margin-top: 20px;
        border-radius: 10px;
        
        width: 80%;

        h1{
            font-size: 30px;
            text-align: center;
           
            color: #ffffff;
            font-family: 'Alfa Slab One', cursive;

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

export default Promotion;