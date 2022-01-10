import axios from "axios"

import { useContext, useEffect, useState } from "react"
import UserContext from "../../../utils/context/UserContext"

import { Images } from "../../../utils/img/images_import";

import DescriptionCard from "../../atomics/DescriptionCard";
import { Image } from "../../atomics/ImageLogo/style";
import TitleCard from "../../atomics/TitleCard";
import { TodayCardStyle, DescriptionContainerStyle, LeftContainer, RightContainer } from "./style";

export default function TodayCard({ id, title, done, currentSequence, highestSequence, refresh, setRefresh, setHabitsDone, habitsDone }) {
  console.log("habito done", habitsDone)
  const { data } = useContext(UserContext)

  const [boolean, setBoolean] = useState(true)

  useEffect(() => {
    done && setHabitsDone(!habitsDone)
    //eslint-disable-next-line
  }, [])

  function handleCheck() {
    if (!done) {
      setBoolean(!boolean)

      const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, {
        headers: {
          "Authorization": `Bearer ${data.token}`
        }
      })

      request.then(() => {
        setRefresh(!refresh)
        setHabitsDone(habitsDone + 1)
      })

      request.catch(error => {
        alert(error.response.data.message)
      })
    } else {
      setBoolean(!boolean)

      const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, {
        headers: {
          "Authorization": `Bearer ${data.token}`
        }
      })

      request.then(() => {
        setRefresh(!refresh)
        setHabitsDone(habitsDone - 1)
      })

      request.catch(error => {
        alert(error.response.data.message)
      })
    }
  }

  return (
    <TodayCardStyle>
      <LeftContainer>
        <TitleCard>{title}</TitleCard>
        <DescriptionContainerStyle>
          <DescriptionCard color="#666666">Sequência atual:</DescriptionCard>
          <DescriptionCard color={done ? "#8FC549" : "#666666"}>{currentSequence} dias</DescriptionCard>
          <DescriptionCard color="#666666">Seu recorde:</DescriptionCard>
          <DescriptionCard color={currentSequence === highestSequence ? "#8FC549" : "#666666"}>{highestSequence} dias</DescriptionCard>
        </DescriptionContainerStyle>
      </LeftContainer>
      <RightContainer onClick={handleCheck} color={done ? "#8FC549" : "#E7E7E7"}>
        <Image width={35} height={28} src={Images["IconCheck"]} />
      </RightContainer>
    </TodayCardStyle>
  )
}