import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components';



const StyledBackground = styled.div `
  background-image: url('background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #f0f0f0;
` ;
const HomePage = () => {
    const connectedUser = useSelector(state => state.user.connectedUser);
    // כאן המקום לכתוב קוד JS
    return (
        <>
       
          <StyledBackground>
          <body>
          <h1>דף הבית</h1>
          {connectedUser != null && <h2>שלום {connectedUser.firstName + " " + connectedUser.lastName}</h2>}
          </body>
        </StyledBackground>
        
        </>
    );
}

export default HomePage;