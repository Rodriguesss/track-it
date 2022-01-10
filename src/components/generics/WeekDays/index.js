import { useState } from "react"
import Day from "../../atomics/Day"
import { WeekDaysStyle } from "./style"

export default function WeekDay({ habitDays, setHabitDays, disabled, arrayDays }) {
  const [days] = useState(['D', 'S', 'T', 'Q', 'Q', 'S', 'S'])

  return (
    <WeekDaysStyle>
      {days.map((day, index) => (<Day key={index} letter={day} array={habitDays} setArray={setHabitDays}
        index={index} disabled={disabled} arrayDays={arrayDays} />))}
    </WeekDaysStyle>
  )
}