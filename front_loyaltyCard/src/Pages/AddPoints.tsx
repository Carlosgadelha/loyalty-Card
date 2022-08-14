import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import axios from 'axios';
import { useState } from 'react';
import Header from '../components/Header';


function AddPoints(){

    const navigate = useNavigate();
    const {promotionId} = useParams();
    const [code, setCode] = useState('');

    function addPoints(event: any){
        event.preventDefault();
        axios.post(`/addPoints/${promotionId}`,{
            code
        })
        .then(res => {
            navigate('/business')
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <Container>
            <Header/>
            <div className="addPoints">
                <form onSubmit={addPoints}>

                    <h1> Adicionar Pontos ao Card</h1>
                    
                    <input type="text" placeholder="Código Cliente" autoFocus onChange={(e) => setCode(e.target.value)}/>
                
                    <button className="btn" type="submit">Adicionar</button>
                </form>
            </div>
            <Footer />
        </Container>
    )
}

const Container = styled.div`

    *{
        box-sizing: border-box;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ECDCB0;
    width: 100vw;
    height: 100vh;

    .addPoints{

        display: flex;
        flex-direction: column;
        position: relative;
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
        input{
            width: 100%;
            height: 50px;
            margin-top: 10px;
            background-color: #ECDCB0;
            border: none;
            border-bottom: 1px solid #DA7422;
            color: #DA7422;
            font-style: italic;
            font-size: 20px;
            font-weight: bold;



            &:focus{
                outline: none;
            }
            &::placeholder{
                color: #DA7422;
                font-style: italic;
                font-size: 20px;
                font-weight: bold;
            }

        }

        .btn{
            font-size: 25px;
            color: #DA7422;
            background-color: #ffffff;
            border: none;
            border-radius: 5px;
            margin-top: 10px;
            font-family: 'Alfa Slab One', cursive;
            font-weight: 400;
            text-align: center;
            width: 100%;
            height: 50px;

            &:hover{
                cursor: pointer;
                background-color: #DA7422;
                color: #ffffff;
            }
        }

    }

        
    
`

export default AddPoints;