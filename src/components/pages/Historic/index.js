import { useEffect, useState } from "react"

import axios from 'axios'

import { Message } from './style'

import Title from "../../atomics/Title"

import Container from "../../generics/Container"
import Header from "../../generics/Header"
import Navbar from "../../generics/Navbar"

export default function Historic() {
  const [historics, setHistorics] = useState([])

  useEffect(() => {
    const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily", {
      headers: {
        "Authorization": `Bearer ${"token"}`
      }
    })

    request.then((response) => {
      setHistorics(response)
    })
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Title>Histórico</Title>
        {historics.length === 0 
        ? <Message>Em breve você poderá ver o histórico dos seus hábitos aqui!</Message> 
        : historics.map((history) => (
          console.log(history)
        ))
        }
      </Container>
      <Navbar />
    </>
  )
}