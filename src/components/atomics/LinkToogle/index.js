import { Link } from "react-router-dom"

import { LinkToogleStyle } from "./style"

export default function LinkToogle({ register, path }) {
  return (
    <Link to={path}>
      <LinkToogleStyle>
        {register ? "Não tem uma conta? Cadastre-se!" : "Já tem uma conta? Faça login!" }
      </LinkToogleStyle>
    </Link>

  )
}