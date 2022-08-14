import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { ImHome, ImCreditCard, ImEqualizer } from "react-icons/im"
import { RiShoppingBag3Fill } from "react-icons/ri"
import { useEffect, useState } from 'react';
import { useManageData } from '../providers/gerenciarDados.js';

interface ContainerProps {
    selectedCards: boolean
    selectedHome: boolean
    selectedOptions: boolean
    selectedBusiness: boolean
}

function Footer(){
    const navigate = useNavigate();
    const location = useLocation();
    const {business} = useManageData();

    const [selectedCards, setSelectedCards] = useState(false);
    const [selectedHome, setSelectedHome] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(false);
    const [selectedBusiness, setSelectedBusiness] = useState(false);


    useEffect(() => {
        if(location.pathname === '/home') setSelectedHome(true);
        if(location.pathname === '/cards') setSelectedCards(true);
        if(location.pathname === '/options') setSelectedOptions(true);
        if(location.pathname === '/business') setSelectedBusiness(true);

    },[])

    return(
        <Container selectedCards = {selectedCards} selectedHome = {selectedHome} selectedBusiness = {selectedBusiness} selectedOptions = {selectedOptions}>
            < ImCreditCard
                onClick={() => {
                   navigate("/cards")
                   setSelectedCards(true);
                }}  
                className='icon selectedCards'/>
            < ImHome
                onClick={() =>{
                   navigate("/home")
                   setSelectedHome(true);
                }}
                className='icon selectedHome'/>
            <RiShoppingBag3Fill 
                onClick={() =>{
                    business.length > 0?
                        navigate("/business")
                    :   
                        navigate('/newBusiness')
                    
                    setSelectedBusiness(true);
                 }}
                className='icon selectedBusiness'/>
            {/* < ImEqualizer  className='icon selectedOptions'/> */}
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

    .selectedBusiness{
        color:${props  =>  props.selectedBusiness ? '#DA7422' : '#ffffff'}
    }

    /* .selectedOptions{
        color:${props  =>  props.selectedOptions ? '#DA7422' : '#ffffff'}
    } 
    */
`
export default Footer;