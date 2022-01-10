import { HabitStatusStyle } from "./style";

export default function HabitStatus({color, children}) {
  return (
    <HabitStatusStyle color={color}>{children}</HabitStatusStyle>
  )
}