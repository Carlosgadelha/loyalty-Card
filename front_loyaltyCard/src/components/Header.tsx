import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from 'react';


function Header(){
    const navigate = useNavigate();
    const regx = new RegExp('/infoCard/')
    const regxAddPoints = new RegExp('/addPoints/')

    const [selectedInfoCard, setSelectedInfoCard] = useState(false);
    const [selectNewPromotion, setSelectedNewPromotion] = useState(false);
    const [selectedNewBusiness, setSelectedNeWBusiness] = useState(false);
    const [addPoints, setAddPoints] = useState(false);
    
    useEffect(() => {
        if(regx.test(location.pathname)) setSelectedInfoCard(true);
        if(location.pathname === '/newPromotion') setSelectedNewPromotion(true);
        if(location.pathname === '/newBusiness') setSelectedNeWBusiness(true);
        if(regxAddPoints.test(location.pathname)) setAddPoints(true);
    },[])

    return(
        <Container>
            <IoArrowBack 
                className="icon" 
                onClick={() => {
                    if(selectNewPromotion) navigate('/business')
                    if(selectedInfoCard) navigate('/cards')
                    if(selectedNewBusiness) navigate('/home')
                    if(addPoints) navigate('/business')
                }}
            />
        </Container>
    )
}

const Container = styled.div`
    padding: 0 1%;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    position: absolute;
    color:  #ffffff;
    top: 0;
    left: 0;
    justify-content: space-between;
    .icon{
        font-size: 40px;
        &:hover{
            cursor: pointer;
            color: #DA7422;
        }
    }
`
export default Header;