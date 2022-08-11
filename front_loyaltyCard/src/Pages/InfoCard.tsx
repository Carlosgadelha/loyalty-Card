import styled from 'styled-components';
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { BsCheckLg } from "react-icons/bs";
import Card from '../components/Card';
import Header from '../components/Header';

function InfoCard(){

    const navigate = useNavigate();

    return (
        <Container>
            < Header />
            < Card />

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

`

export default InfoCard;