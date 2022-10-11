import React, { useEffect, useState} from 'react'
import styled from 'styled-components'

export default function FetchData() {
 const url = 'https://api.adviceslip.com/advice'
 const [advice, setAdvice] = useState("Loading...")

 const fetchData = async () => {
  try {
   const response = await fetch(url)
   const data = await response.json()
   setAdvice(data.slip.advice)
  } catch (error) {
   console.log("Error on fetching advice API: ", error);
  }
 }

 useEffect(() => { 
  fetchData()
 }, [])

  return (
   <Advice>{advice}</Advice>
  )
}

const Advice = styled.h3`
 color: #ae91e7;
 text-shadow: 0 0 2px  purple;
 font-size: 3em;
 user-select: none;
`
