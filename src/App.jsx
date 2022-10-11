import React, { useState } from "react";
import styled from "styled-components";
import Buttons from "./components/Button";
import Input from "./components/input";
import NavigationButtons from "./components/NavigationButton";
import FetchData from "./components/FetchData";
const App = () => {
 const data = [
  {
   title: "Courses",
   image: "https://designcode.io/images/icons/courses.svg",
  },
  {
   title: "Tutorials",
   image: "https://designcode.io/images/icons/tutorials.svg",
  },
  {
   title: "Livestreams",
   image: "https://designcode.io/images/icons/livestreams.svg",
  },
  {
   title: "Pricing",
   image: "https://designcode.io/images/icons/pricing.svg",
  },
 ];

 return (
  <>
   <Card>
    <NavigationButtons datas={data} />
   </Card>
   <Card>
    <FetchData />
   </Card>
  </>
 );
};

export default App;

const Card = styled.div`
 padding: 20px 30px;
 background: linear-gradient(45deg, lightblue, pink);
 border-radius: 25px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin: 15px;
`;
