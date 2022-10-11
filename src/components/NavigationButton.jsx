import React, { useState } from "react";
import styled from "styled-components";

export default function NavigationButtons({ datas }) {
 const [rotate, setRotate] = useState(false);

 return (
  <Wrapper onMouseEnter={() => setRotate(false)} onMouseLeave={() => setRotate(true)} >
   {datas.map((data, i) => (
    <MyNavigationButton rotateButton={rotate} key={i}>
     <img src={data.image} alt="" />
     <p>{data.title}</p>
    </MyNavigationButton>
   ))}
  </Wrapper>
 );
}

const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100%;
 margin: -20px -30px;
`;

const MyNavigationButton = styled.div`
 padding: 10px 40px;
 background: rgba(112, 0, 255, 0.3);
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 10px;
 border-radius: 15px;
 font-family: "Tahoma";
 color: whitesmoke;
 user-select: none;
 box-shadow: 0 0 10px lightblue;
 & img {
  margin-right: 10px;
 }
 &:active {
  transform: scale(1.01);
 }
 transform: ${({rotateButton}) => rotateButton? "rotateX(90deg)" : "rotateX(0)" };
 transition: 0.4s;
`;
