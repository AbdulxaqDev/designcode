import React, { useState } from "react";
import styled from "styled-components";
import Buttons from "./components/Button";
import Input from "./components/input";

const App = () => {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 return (
  <Card>
   {isLoggedIn ? (
    <Buttons isActive={true} title="Logout" />
   ) : (
    <Buttons isActive={true} title="Login" />
   )}
  </Card>
 );
};

export default App;

const Card = styled.div`
 padding: 20px 30px;
 background: rgb(192, 77, 0, 0.12);
 border-radius: 25px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 300px;
 margin: 15px;
`;
