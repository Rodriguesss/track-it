import { Body, ContainerStyle } from "./style"

export default function Container({ children }) {
  return (
    <ContainerStyle>
      <Body />
      {children}
    </ContainerStyle>
  )
}