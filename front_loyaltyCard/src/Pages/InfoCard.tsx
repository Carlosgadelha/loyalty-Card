import styled from 'styled-components';
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { BsCheckLg } from "react-icons/bs";

function InfoCard(){

    const navigate = useNavigate();

    return (
        <Container>
            <div className="menu">
                <IoArrowBack className="icon" onClick={() => navigate('/')}/>
            </div>
            <div className="code">
                <h1>Na compra de 10 ganha 1</h1>
                <div className="pontos">
                    <BsCheckLg className="check" />
                    <div className="ponto"></div>
                    <div className="ponto"></div>
                    <div className="ponto"></div>
                    <div className="ponto"></div>
                    <div className="ponto"></div>
                    <div className="ponto"></div>
                    <div className="ponto"></div>
                    <div className="ponto"></div>
                    <div className="ponto"></div>
                    
                    
                </div>
                <p>Loja de doces </p>
            </div>

        </Container>
    )
}

const Container = styled.div`

    background-color: #ECDCB0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    .menu {
        padding: 0 1%;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        position: absolute;
        color:  #ffffff;
        top: 0;
        left: 0;
        justify-content: space-between;
        .icon{
            font-size: 40px;
            &:hover{
                cursor: pointer;
                color: #DA7422;
            }
        }
    }

    .code{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 3px solid #DA7422; 
        box-shadow: 0px 0px 10px  #DA7422;

        padding: 20px;
        border-radius: 10px;
        /* border-radius: 80px 10px 80px 10px; */
        
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
    }
`

export default InfoCard;