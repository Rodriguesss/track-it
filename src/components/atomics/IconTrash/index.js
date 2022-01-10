import { useContext } from "react"
import UserContext from "../../../utils/context/UserContext"

import axios from 'axios'

import { IconTrashStyle } from "./style"

export default function IconTrash({ id, src, refresh, setRefresh }) {
  const { data } = useContext(UserContext)

  function removeHabit(id) {
    const confirm = window.confirm("Deseja deletar este hábito?")

    if (confirm) {
      const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, {
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      })

      request.then(() => {
        setRefresh(!refresh)
      });

      request.catch((error) => {
       alert(error)
      })
    }
  }

  return (
    <IconTrashStyle src={src} onClick={() => removeHabit(id)} />
  )
}