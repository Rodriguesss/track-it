import LinkCancel from "../../atomics/LinkCancel"
import Button from "../../atomics/Button"

import { OptionFormHabitStyle } from "./style"

export default function OptionFormHabit({ disabled, setOpacity }) {
  return (
    <OptionFormHabitStyle>
      <LinkCancel setOpacity={setOpacity} />
      <Button width="30" value="Salvar" type="submit" color="#52B6FF" disabled={disabled} />
    </OptionFormHabitStyle>
  )
}