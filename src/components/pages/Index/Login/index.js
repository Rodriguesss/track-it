import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Loader from "react-loader-spinner";

import axios from "axios"

import { Container } from '../style'

import ImageLogo from '../../../atomics/ImageLogo'
import { Images } from '../../../../utils/img/images_import'

import Form from '../../../generics/Form'
import InputForm from '../../../atomics/Input'

import Button from '../../../atomics/Button'

import LinkToogle from '../../../atomics/LinkToogle'

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [buttonValue, setButtonValue] = useState("Entrar")
  const [buttonColor, setButtonColor] = useState("#52B6FF")
  const [disabled, setDisabled] = useState(false)

  function login(event) {
    setButtonValue(<Loader type="ThreeDots" color="#FFFFFF" height={10} width={80} timeout={3000} />)
    setDisabled(true)
    setButtonColor("#52B6FFbb")

    event.preventDefault()

    setTimeout(() => {
      const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, {
        email: email,
        password: password
      });

      request.then(() => {
        navigate('/hoje')
      })

      request.catch((error) => {
        alert('Erro ao logar com usuário: ' + error.response.data.message)

        setButtonValue("Entrar")
        setDisabled(false)
        setButtonColor("#52B6FF")
      })
    }, 2000)
  }

  return (
    <Container>
      <ImageLogo src={Images["Logo"]} width="178" height="180" />

      <Form onSubmit={login}>
        <InputForm type="email" placeholder="email" value={email} setAttribute={setEmail} disabled={disabled} />
        <InputForm type="password" placeholder="senha" value={password} setAttribute={setPassword} disabled={disabled} />

        <Button width="100" value={buttonValue} disabled={disabled} type="submit" color={buttonColor} />
      </Form>

      <LinkToogle register={true} path="/cadastro" />
    </Container>
  )
}