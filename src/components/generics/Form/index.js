import { FormStyle } from "./style"

export default function Form({ onSubmit, width, children }) {
  return (
    <FormStyle onSubmit={onSubmit} width={width}>
      {children}
    </FormStyle>
  )
}