import { useEffect, useState } from "react"

import axios from 'axios'

import { Message } from './style'

import Title from "../../atomics/Title";
import Container from "../../generics/Container";
import Header from "../../generics/Header";
import Navbar from "../../generics/Navbar";

export default function Habits() {
  const [habits, setHabits] = useState([])

  useEffect(() => {
    const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
      headers: {
        "Authorization": `Bearer ${"token"}`
      }
    })

    request.then((response) => {
      setHabits(response)
    })
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Title>Meus hábitos</Title>
        {habits.length === 0
          ? <Message>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Message>
          : habits.map((history) => (
            console.log(history)
          ))
        }
      </Container>
      <Navbar />
    </>
  )
}