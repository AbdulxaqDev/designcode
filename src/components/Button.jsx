import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Button = ({ isActive }) => {
 const myRef = useRef(null);

 useEffect(() => {
  if (myRef) {
   console.log("myRef", myRef.current);
  }
 });

 return (
  <>
   <MyButton
    isActive={isActive}
    onClick={() => alert("You clicked")}
    ref={myRef}
    disabled={!isActive}
   >
    Click (child component)
   </MyButton>
  </>
 );
};

export default Button;

const MyButton = styled.button`
 background: ${({isActive}) => isActive ? "linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%)" : "grey"};
 padding: 12px 0;
 width: 200px;
 border: none;
 border-radius: 30px;
 color: white;
 font-weight: bold;
 font-family: Segoe UI, sans-serif;
 margin: 0 auto;
`;
