import { InputFormStyle } from './style'

export default function InputForm({ type, placeholder, value, setAttribute }) {
  return (
    <InputFormStyle type={type} placeholder={placeholder} value={value} onChange={({target}) => setAttribute(target.value)} />
  )
}