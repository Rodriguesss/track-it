import { ButtonStyle } from './style'

export default function Button({ value, width, type, disabled, color, setOpacity }) {
  function addForm() {
    if(setOpacity !== undefined) {
      setOpacity("1")
    }
  }

  return (
    <ButtonStyle width={width} type={type} color={color} onClick={() => addForm()} disabled={disabled}>{value}</ButtonStyle>
  )
}