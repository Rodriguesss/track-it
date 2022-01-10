import { useContext } from "react"
import UserContext from "../../../utils/context/UserContext"

import ImageLogo from "../../atomics/ImageLogo"

import { Images } from "../../../utils/img/images_import"

import { HeaderStyle, Icon } from "./style"

export default function Header() {
  const { data } = useContext(UserContext)

  return (
    <HeaderStyle>
      <ImageLogo src={Images["LogoWriting"]} width="70" height="30" />
      <Icon src={data.image} />
    </HeaderStyle>
  )
}