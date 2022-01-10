import { LinkCancelStyle } from "./style";

export default function LinkCancel({ setOpacity }) {

  return (
    <LinkCancelStyle onClick={() => setOpacity("0")}>Cancelar</LinkCancelStyle>
  )
}