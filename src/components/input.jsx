import React from 'react'
import styled from 'styled-components'

export default function Input() {
  return <MyInput></MyInput>
}

const MyInput = styled.input`
 outline: none;
 height: 50px;
 width: 300px;
 border-radius: 10px;
 border: 1px solid #cecece;
 margin: 0 10px;
 &:active {
  border: green solid 1px
 }
`
