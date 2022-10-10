import React from "react";
import styled from "styled-components";

const Button = ({ isActive, title }) => {
 return (
  <>
   <MyButton isActive={isActive} disabled={!isActive}>
    {title}
   </MyButton>
  </>
 );
};

export default Button;

const MyButton = styled.button`
 background: ${({ isActive }) =>
  isActive ? "linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%)" : "grey"};
 padding: 12px 0;
 width: 200px;
 border: none;
 border-radius: 30px;
 color: white;
 font-weight: bold;
 font-family: Segoe UI, sans-serif;
 margin: 10px auto;
`;
