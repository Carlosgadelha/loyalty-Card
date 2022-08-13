import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../components/Card';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Card{
    id: number;
    points: number;
    promotion:{
        name: string;
        pointsNeeded: number;
        discount: number;
        business:{
            name: string;
        }
    }
}

function InfoCard(){
    const {id} = useParams();
    
    const navigate = useNavigate();
    const [card, setCard] = useState<Card| null>(null);
    const token = window.localStorage.getItem('token');

    useEffect(() => {
        axios.get(`/cards/${id}`)
        .then(res => {
            setCard(res.data);
        })
        .catch(err => {
            console.log(err);
            
        })
    }, [])

    return (
        <Container>
            < Header />

            {card && <Card 
                title = {card.promotion?.name}
                id = {card?.id}
                nameBusiness = {card?.promotion.business.name}
                points = {card?.points}
                pointsNeeded = {card?.promotion.pointsNeeded}
            />} 

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