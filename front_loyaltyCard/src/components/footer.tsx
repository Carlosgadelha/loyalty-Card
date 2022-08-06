import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { ImHome3, ImCreditCard, ImEqualizer } from "react-icons/im"
import { useEffect, useState } from 'react';

interface ContainerProps {
    selectedCards: boolean;
    selectedHome: boolean;
    selectedOptions: boolean;
}

function Footer(){
    const navigate = useNavigate();
    const location = useLocation();

    const [selectedCards, setSelectedCards] = useState(false);
    const [selectedHome, setSelectedHome] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(false);


    useEffect(() => {
        if(location.pathname === '/') setSelectedHome(true);
        if(location.pathname === '/cards') setSelectedCards(true);
        if(location.pathname === '/options') setSelectedOptions(true);
    },[])

    return(
        <Container selectedCards = {selectedCards} selectedHome = {selectedHome} selectedOptions = {selectedOptions}>
            < ImCreditCard
                onClick={() => {
                   navigate("/cards")
                   setSelectedCards(true);
                }}  
                className='icon selectedCards'/>
            < ImHome3
                onClick={() =>{
                   navigate("/")
                   setSelectedHome(true);
                }}
                className='icon selectedHome'/>
            < ImEqualizer  className='icon selectedOptions'/>
        </Container>
    )
}

const Container = styled.div<ContainerProps>`
    background-color: #2C5530;
    box-shadow: 0px 0px 30px #DA7422;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 60px;
    width: 100%;


    .icon{
        font-size: 30px;
        &:first-of-type{ margin-left: 20px;}
        &:last-of-type { margin-right: 20px;}

        &:hover{
                cursor: pointer;
                color: #DA7422;
            }
        
    }
    .selectedHome{
        color:${props  =>  props.selectedHome ? '#DA7422' : '#ffffff'}
    }

    .selectedCards{
        color:${props  =>  props.selectedCards ? '#DA7422' : '#ffffff'}
    }

    .selectedOptions{
        color:${props  =>  props.selectedOptions ? '#DA7422' : '#ffffff'}
    }
`
export default Footer;