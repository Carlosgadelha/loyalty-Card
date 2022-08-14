import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import { IoExitOutline } from "react-icons/io5";

import Footer from "../components/Footer";

function Home(){

    const navigate = useNavigate();
    const code = localStorage.getItem('code')?.toUpperCase();
    const name = localStorage.getItem('name');

    return (
        <Container>
            <div className="menu">
                <p>{`Olá, ${name} `}</p>
                <IoExitOutline className="icon" onClick={() => {
                    navigate('/')
                    window.localStorage.clear();
                }}/>
                
            </div>
            <h1>Ao fazer uma compra forneça o codigo abaixo:</h1>
            <div className="code">
                <h1>{code}</h1>
            </div>
            
            < Footer />

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

    h1{
        margin-bottom: 20px;
        font-size: 20px;
        color: #DA7422;
    }

    .menu {
        /* padding: 0 1%; */
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        position: absolute;
        color: #ffffff;
        top: 0;
        left: 0;
        justify-content: space-between;
        p{
            font-size: 30px;
            font-weight: bold;
            margin-left: 10px;
            color: #DA7422;

        }
        .icon{
            font-size: 40px;
            font-weight: bold;
            margin-right: 10px;

            &:hover{
                cursor: pointer;
                color: #DA7422;
            }
        }
    }

    .code{
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 30px #DA7422;
        /* border-radius: 80px 10px 80px 10px; */
        height: 100px;
        width: 100%;

        h1{
            font-size: 50px;
            color: #2C5530;
            font-family: 'Alfa Slab One', cursive;
            font-weight: 400;
        }
    }
`

export default Home