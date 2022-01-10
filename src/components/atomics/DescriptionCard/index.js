import { DescriptionCardStyle } from "./style";

export default function DescriptionCard({color, children}) {
  return (
    <DescriptionCardStyle color={color}>{children}</DescriptionCardStyle>
  )
}