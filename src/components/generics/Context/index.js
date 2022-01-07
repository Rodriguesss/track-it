import { Context } from './style'

export default function Container({ children }) {
  return (
    <Context>
      {children}
    </Context>
  )
}