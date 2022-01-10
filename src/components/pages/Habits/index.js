import { useContext, useEffect, useState } from "react"

import UserContext from "../../../utils/context/UserContext"

import axios from 'axios'

import { ContainerCard, HeaderFormHabit, Message } from './style'

import Title from "../../atomics/Title"
import Container from "../../generics/Container"
import Header from "../../generics/Header"
import Navbar from "../../generics/Navbar"
import FormHabit from "../../generics/FormHabit"
import CardHabit from "../../generics/HabitCard"
import Button from "../../atomics/Button"

export default function Habits() {
  const { data } = useContext(UserContext)

  const [refresh, setRefresh] = useState(false)
  const [habitName, setHabitName] = useState("")
  const [habitDays, setHabitDays] = useState([])
  const [opacity, setOpacity] = useState("1")
  const [habits, setHabits] = useState([])

  useEffect(() => {
    const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
      headers: {
        "Authorization": `Bearer ${data.token}`
      }
    })

    request.then((response) => {
      setHabits(response.data)
    })
  }, [data, refresh])

  return (
    <>
      <Header />
      <Container>
        <HeaderFormHabit>
          <Title>Meus hábitos</Title>
          <Button width="10" value="+" color="#52B6FF" type="button" setOpacity={setOpacity} />
        </HeaderFormHabit>

        <FormHabit value={habitName} setAttribute={setHabitName} habitDays={habitDays} setHabitDays={setHabitDays}
          refresh={refresh} setRefresh={setRefresh} opacity={opacity} setOpacity={setOpacity} />

        <ContainerCard opacity={opacity}>
          {habits.length === 0
            ? <Message>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Message>
            : habits.map(({ id, name, days }) => (
              <CardHabit key={id} id={id} title={name} arrayDays={days} refresh={refresh} setRefresh={setRefresh} />
            ))
          }
        </ContainerCard>
      </Container>
      <Navbar />
    </>
  )
}