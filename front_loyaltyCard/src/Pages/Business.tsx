import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { BiExit } from "react-icons/bi"
import { IoExit, IoExitOutline } from "react-icons/io5";

import Footer from "../components/Footer"
import { useState } from 'react';
import Card from '../components/Card';
import NewBusiness from './NewBusiness';
import NewPromotion from './NewPromotion';
import Promotion from '../components/Promotion';
import { useManageData } from '../providers/gerenciarDados';

function Business(){
    const navigate = useNavigate();
    const {business, promotions} = useManageData();


    return (
        <Container>
            <div className="header">
                <h1>{business[0]?.name}</h1>
                <h2>Promoções</h2>
            </div>
            
            <div className="promotions">
                {
                    !promotions.length? 

                        <>
                            
                            <Fab aria-label="add" className='addPromotion' onClick={() => { navigate('/newPromotion')}}>
                                <AddIcon />
                            </Fab>
                            
                        </>

                    :   <>
                            
                            {promotions.map(promotion => < Promotion promotionId={promotion.id} title={promotion.name} />)}
                            <Fab aria-label="add" className='addPromotion' onClick={() => { navigate('/newPromotion')}}>
                                <AddIcon />
                            </Fab>
                        </>
                } 
            </div>
            < Footer />
            
        </Container>
    )
    
}

const Container = styled.div`

    background-color: #ECDCB0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    min-height: 100vh;
    width: 100vw;

    .header {
        display: flex;
        flex-direction: column;
        position:fixed;
        top: 0;
        left: 0;
        background-color: #ECDCB0;
        width: 100%;

        h1{
            font-size: 30px;
            color: #DA7422;
            text-align: left;
            margin: 20px 0px  10px 20px ;
            font-family: 'Alfa Slab One', cursive;
            font-weight: 400;
            width: 100%;
        }

        h2{
            font-size: 25px;
            color: #2C5530;
            padding-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #DA7422;
            width: 100%;
            text-align: center;
            font-family: 'Alfa Slab One', cursive;
            font-weight: 400;
        }
    }

    

    .promotions{
        display: flex;
        flex-direction: column;
        margin-top: 100px;
        align-items: center;
        padding-bottom: 150px;
        height: 100%;
        width: 100%;

        /* &:nth-last-of-type(){
            margin-bottom: 60px;
        } */

        .addPromotion{
            position: fixed;
            bottom: 80px;
            right: 20px;
            background-color: #ffffff;
            color: #DA7422;
            box-shadow: 0px 0px 10px  #DA7422;

            &:hover{
                cursor: pointer;
                background-color: #DA7422;
                color: #ffffff;
                
            }
        }

    }
`

export default Business;