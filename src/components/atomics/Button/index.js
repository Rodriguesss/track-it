import { ButtonStyle } from './style'

export default function Button({ value, width, type, disabled, color }) {
  return (
    <ButtonStyle width={width} type={type} color={color} disabled={disabled}>{value}</ButtonStyle>
  )
}