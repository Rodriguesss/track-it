import { FormStyle } from "./style"

export default function Form({ onSubmit, children }) {
  return (
    <FormStyle onSubmit={onSubmit}>
      {children}
    </FormStyle>
  )
}