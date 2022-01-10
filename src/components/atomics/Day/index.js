import { useEffect, useState } from "react"

import { DayStyle } from "./style"

export default function Day({ letter, array, setArray, index, disabled, arrayDays }) {
  console.log('array', array)

  const [colors] = useState({
    selectedColor: { color: "#FFFFFF", backgroundColor: "#CFCFCF" },
    defaultColor: { color: "#DBDBDB", backgroundColor: "#FFFFFF" }
  })
  const [themeColor, setThemeColor] = useState(colors["defaultColor"])
  const [statusColor, setStatusColor] = useState(true)

  useEffect(() => {
    arrayDays !== undefined && filledDays(arrayDays)
    //array !== undefined && (array.length === 0 && setThemeColor(colors["defaultColor"]))
    // eslint-disable-next-line
  }, [array, arrayDays])

  function toogleArray() {
    toogleSelectedColor()

    if ((array.find(number => number === index)) !== undefined) {
      setArray(oldArray => oldArray.filter(number => number !== index).sort())
    } else {
      setArray(oldArray => [...oldArray, index].sort())
    }
  }

  function filledDays(typeArray) {
    typeArray.find(number => number === index && changeColors())
  }

  function changeColors() {
    setThemeColor(colors["selectedColor"])
  }

  function toogleSelectedColor() {
    if (statusColor) {
      setThemeColor(colors["selectedColor"])
      setStatusColor(!statusColor)
    } else {
      setThemeColor(colors["defaultColor"])
      setStatusColor(!statusColor)
    }
  }

  return (
    <DayStyle themeColor={themeColor} onClick={() => toogleArray()} type="button" disabled={disabled}>{letter}</DayStyle>
  )
}