import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Footer from "../components/footer"
import Card from '../components/Card';

function Cards(){

    const navigate = useNavigate();

    return (
        <Container>

            <div className="cards">
                < Card />
                < Card />
                < Card />
                < Card />
            </div>
            
            <Footer />

        </Container>
    )
}

const Container = styled.div`

    background-color: #ECDCB0;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100vw;

    .cards {
        display: flex;
        flex-direction: column;
        margin-top: 60px;
        align-items: center;
        width: 80%;
    }
`

export default Cards;