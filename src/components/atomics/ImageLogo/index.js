import { Image } from "./style"

export default function ImageLogo({ src, width, height }) {
  return (
    <Image src={src} width={width} height={height} />
  )
}