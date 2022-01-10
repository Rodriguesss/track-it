import { useContext, useState } from "react"
import UserContext from "../../../utils/context/UserContext"

import axios from "axios"

import { FormHabitStyle } from "./style"

import Form from "../Form"
import InputForm from "../../atomics/InputForm"
import WeekDay from "../WeekDays"
import OptionFormHabit from "../OptionFormHabit"

export default function FormHabit({ value, setAttribute, habitDays, setHabitDays, refresh, setRefresh, opacity, setOpacity }) {
  const { data } = useContext(UserContext)

  const [disabled, setDisabled] = useState(false)

  function addHabit(event) {
    setDisabled(true)

    event.preventDefault()

    setTimeout(() => {
      const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
        name: value,
        days: habitDays
      }, {
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      })

      request.then(() => {
        setDisabled(false)
        setRefresh(!refresh)
        setAttribute("")
        setHabitDays([])
      });

      request.catch((error) => {
        setDisabled(false)
        alert(error)
      })
    }, 2000)

  }
  return (
    <FormHabitStyle opacity={opacity}>
      <Form onSubmit={addHabit} width="100">
        <InputForm type="text" placeholder="nome do hábito" value={value} setAttribute={setAttribute} disabled={disabled} />
        <WeekDay habitDays={habitDays} setHabitDays={setHabitDays} />
        <OptionFormHabit disabled={disabled} setOpacity={setOpacity} opacity={opacity} />
      </Form>
    </FormHabitStyle>
  )
}