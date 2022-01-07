import { BrowserRouter, Routes, Route } from "react-router-dom"

import { GlobalStyle } from "../css/reset"
import { Style } from "../css/style"

import Context from "./generics/Context"

import Today from './pages/Today'
import Habits from "./pages/Habits"
import Login from "./pages/Index/Login"
import Register from "./pages/Index/Register"

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Style />
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/habitos" element={<Habits />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </>
  )
}