import React, { useRef, useEffect } from "react";
// import styled from "styled-components";

const Button = () => {
 const myRef = useRef(null);

 useEffect(() => {
  if (myRef) {
   console.log("myRef", myRef.current);
  }
 });

 return (
  <>
   <button onClick={() => alert("You clicked")} ref={myRef}>
    Click
   </button>
  </>
 );
};

export default Button;

// const MyButton = styled.button`
//  background: ${(props) =>
//   props.disabled
//    ? "grey"
//    : "linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%)"};
//  padding: 12px 0;
//  width: 200px;
//  border: none;
//  border-radius: 30px;
//  color: white;
//  font-weight: bold;
//  font-family: Segoe UI, sans-serif;
// `;
