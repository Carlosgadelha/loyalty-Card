import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from "react";
import axios from "axios";

export default function signup() {
    window.localStorage.clear();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const navigate = useNavigate();

    function handleSubmit(event: any) {
        event.preventDefault();
        axios.post('/signup', {
            name,
            email,
            password,
            passwordConfirmation
        })
        .then(res => {
            navigate("/");
        })
        .catch(err => {
            console.log(err);
        })
        
    }
    
    return (
        <Container>
            <h1>LoyaltyCard</h1>
            <form onSubmit={handleSubmit}>
                < input 
                    type="text" 
                    placeholder="Nome"
                    value= {name}
                    onChange={ e => setName(e.target.value)}
                />
                < input 
                    type="text" 
                    placeholder="Email"
                    value= {email} 
                    onChange={ e => setEmail(e.target.value)}/>
                < input 
                    type="password" 
                    placeholder="Senha" 
                    value= {password}
                    onChange={ e => setPassword(e.target.value)}/>
                < input 
                    type="password" 
                    placeholder="Confirmar Senha" 
                    value= {passwordConfirmation}
                    onChange={ e => setPasswordConfirmation(e.target.value)}/>
                < button type="submit">Cadastrar</button>
            </form>
            <StyledLink to="/">Não tem uma conta? Cadastre-se aqui</StyledLink>
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
    }
`