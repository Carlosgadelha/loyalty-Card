import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from "react";
import axios from "axios";
import { useManageData } from '../providers/gerenciarDados.js';

export default function Login() {
    window.localStorage.clear();
    const {setToken} = useManageData();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event: any) {
        event.preventDefault();

        axios.post("/signin", {
            email,
            password
        })
        .then(response => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("code", response.data.code);
            localStorage.setItem("name", response.data.name);
            setToken(response.data.token);
            navigate("/home");
        })
        .catch(error => {
            console.log(error);
        })
        
    }
    
    return (
        <Container>
            <h1>LoyaltyCard</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input type="password" placeholder="Senha" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                < button type="submit">Entrar</button>
            </form>
            <StyledLink to="/signup">Não tem uma conta? Cadastre-se aqui</StyledLink>
        </Container>
    );
}

const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: 700;
    font-size: 15px;
    color: #2C5530;
    margin-top: 35px;
`;

const Container = styled.div`
    *{
        box-sizing: border-box;
        border: none;
    }   
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #ECDCB0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        margin-bottom: 60px;
        font-family: 'Lobster';
        color: #DA7422;
        
        font-size: 50px;
        font-weight: bold;
    }
    form {
        display: flex;
        flex-direction: column;
        width: 90%;
        font-family: 'Padauk', sans-serif;
    }
    input {
        margin-bottom: 5px;
        width: 100%;
        height: 60px;
        background-color: #ffffff;
        color: #DA7422;
        text-indent: 10px;
        font-size:20px;

        &::placeholder{
            color: #DA7422;
        }

        &:focus{
            outline: none;
        }
    }
    
    button {
        margin-top: 30px;
        width: 100%;
        height: 60px;
        background-color: #DA7422;
        box-shadow: 0px 0px 10px  #DA7422;
        color: #ffffff;
        font-size: 30px;
        font-weight:400;

        &:hover{
            /* color: #fff955; */
            cursor: pointer;
        }
    }
`