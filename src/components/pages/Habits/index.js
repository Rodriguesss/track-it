import { useContext, useEffect, useState } from "react"

import UserContext from "../../../utils/context/UserContext"

import axios from 'axios'

import { Message } from './style'

import Title from "../../atomics/Title"
import Container from "../../generics/Container"
import Header from "../../generics/Header"
import Navbar from "../../generics/Navbar"

export default function Habits() {
  const { data } = useContext(UserContext)

  /*const [objNewHabit, setobjNewHabit] = useState({
    name: "",
    days: []
  })*/

  const [habits, setHabits] = useState([])

  useEffect(() => {
    const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
      headers: {
        "Authorization": `Bearer ${data.token}`
      }
    })

    request.then((response) => {
      console.log(response)
      setHabits(response.data)
    })
  }, [data])

  /*function addHabit(event) {
    event.preventDefault()

    const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", objNewHabit, {
      headers: {
        Authorization: `Bearer ${token.token}`
      }
    })

    request.then((response) => {
      console.log(response)
    });

    request.catch((error) => {
      console.log(error)
    })
  }*/

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