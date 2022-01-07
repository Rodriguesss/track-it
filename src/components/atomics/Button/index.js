import { ButtonStyle } from './style'

export default function Button({ value, width, type }) {
  return (
    <ButtonStyle width={width} type={type}>{value}</ButtonStyle>
  )
}