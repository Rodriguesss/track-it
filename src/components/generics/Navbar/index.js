import { Link } from "react-router-dom"

import { NavbarStyle, Option } from "./style"

export default function Navbar() {
  return (
    <NavbarStyle>
      <Link to="/habitos">
        <Option>Hábitos</Option>
      </Link>

      <Link to="/hoje">
        <Option>Hoje</Option>
      </Link>

      <Link to="/historico">
        <Option>Histórico</Option>
      </Link>
    </NavbarStyle>
  )
}