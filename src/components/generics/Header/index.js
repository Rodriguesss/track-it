import ImageLogo from "../../atomics/ImageLogo"

import { Images } from "../../../utils/img/images_import"

import { HeaderStyle, Icon } from "./style"

export default function Header() {
  return (
    <HeaderStyle>
      <ImageLogo src={Images["LogoWriting"]} width="70" height="30" />
      <Icon src="https://avatars.githubusercontent.com/u/28655608?v=4" />
    </HeaderStyle>
  )
}