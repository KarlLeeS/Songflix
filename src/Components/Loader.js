import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width:100vw;
  display:flex; 
  justify-content:center; 
  font-size:10em; 
  margin-top:20px ;
  padding:0px 20px;
  color:red;
`;

export default () => (
  <Container>
    <span role="img" aria-label="Loading" >
      fucking wait !!!!
    </span>
  </Container>
)