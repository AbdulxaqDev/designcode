import React from "react";
import styled from "styled-components";

export default function NavigationButtons({ data }) {
 return (
  <Wrapper>
   {data.map((data, i) => (
    <MyNavigationButton>
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
 & img{
  margin-right: 10px;
 }
 &:active{
  transform: scale(1.01)
 }
`;
