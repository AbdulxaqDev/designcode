import React from "react";
import styled from "styled-components";
import useInput from "./useInput";

export default function Form() {
 const email = useInput("");
 const password = useInput("");

 const submitForm = (e) => {
  e.preventDefault();
 };

 return (
  <MyForm onSubmit={submitForm}>
   <Input placeholder="Email" type="email" {...email} />
   <Input placeholder="Password" type="password" {...password} />
   <Button type="submit">Sign in</Button>
  </MyForm>
 );
}

const MyForm = styled.form`
 display: flex;
 flex-direction: column;
`;

const Input = styled.input`
 background: rgba(189, 211, 225, 0.75);
 paddinf: 7px;
 border-radius: 10px;
 height: 30px;
 outline: none;
 border: 1px solid #c9c0d4;
 margin: 3px 0;
 padding: 5px;
`;

const Button = styled.button`
 background: linear-gradient(40deg, pink, lightblue);
 paddinf: 7px;
 border-radius: 10px;
 height: 30px;
 outline: none;
 border: 2px solid #ae91e7;
 margin: 3px 0;
 color: purple;
 font-size: 15px;
 font-weight: 600;
 &:active {
  transform: scale(1.01);
 }
`;
