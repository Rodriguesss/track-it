import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, { useState } from "react";

import { GlobalStyle } from "../css/reset"
import { Style } from "../css/style"

import Context from "./generics/Context"

import UserContext from "../utils/context/UserContext"

import Login from "./pages/Index/Login"
import Register from "./pages/Index/Register"
import Today from './pages/Today'
import Habits from "./pages/Habits"
import Historic from "./pages/Historic"

export default function App() {
  const [data, setData] = useState([])

  return (
    <>
      <GlobalStyle />
      <Style />
      <Context>
        <BrowserRouter>
          <UserContext.Provider value={{ data, setData }}>
            <Routes>
              <Route path="/" element={<Login setData={setData} />} />
              <Route path="/cadastro" element={<Register />} />
              <Route path="/hoje" element={<Today data={data} />} />
              <Route path="/habitos" element={<Habits />} />
              <Route path="/historico" element={<Historic />} />
            </Routes>
          </UserContext.Provider>
        </BrowserRouter>
      </Context>
    </>
  )
}