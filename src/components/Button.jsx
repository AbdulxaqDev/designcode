import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Button = () => {
 const [count, setCount] = useState(0);
 useEffect(() => { 
  document.title = `You clicked ${count} times`
 }, [count])

 return (
  <>
   <MyButton onClick={() => setCount(count + 1)}>{`Clicked ${count} times`}</MyButton>
  </>
 );
};

export default Button;

const MyButton = styled.button`
 background: ${(props) =>
  props.disabled
   ? "grey"
   : "linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%)"};
 padding: 12px 0;
 width: 200px;
 border: none;
 border-radius: 30px;
 color: white;
 font-weight: bold;
 font-family: Segoe UI, sans-serif;
`;
