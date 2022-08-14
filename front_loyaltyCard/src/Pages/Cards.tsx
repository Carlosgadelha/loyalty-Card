import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Footer from "../components/Footer"
import Card from '../components/Card';
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

function Cards(){

    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    const token = window.localStorage.getItem('token');


    useEffect(() => {
        axios.get('/cards',{
        headers: {
            'Authorization': 'Bearer ' + token
        }
        })
        .then(res => {
            setCards(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    } , [])

    return (
        <Container>

            <div className="cards">
            <>
                {cards.map((card: Card) => {
                    return <Card 
                                title = {card.promotion.name}
                                id = {card.id}
                                nameBusiness = {card.promotion.business.name}
                                points = {card.points}
                                pointsNeeded = {card.promotion.pointsNeeded}
                                key = {card.id}
                            />  
                })}
            </>
            </div>
            <div className="menssage">
                {cards.length === 0 && <h1>Nenhum Cartão encontrado ...</h1>}
            </div>
            <Footer />

        </Container>
    )
}

const Container = styled.div`

    background-color: #ECDCB0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;

    .cards {
        display: flex;
        flex-direction: column;
        margin-top: 60px;
        align-items: center;
        width: 100%;
    }

    .menssage {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;

        h1{
            font-size: 30px;
            font-weight: 700;
            color: #2C5530;
            
        }
    }

`

export default Cards;