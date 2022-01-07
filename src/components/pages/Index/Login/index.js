import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

  function login() {
    const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, {
      email: email,
      password: password
    });

    request.then(() => {
      navigate('/hoje')
    })

    request.catch((erro) => {
      console.log(erro)
    })
  }

  return (
    <Container>
      <ImageLogo src={Images["Logo"]} width="178" height="180" />

      <Form onSubmit={login}>
        <InputForm type="email" placeholder="email" value={email} setAttribute={setEmail} />
        <InputForm type="password" placeholder="senha" value={password} setAttribute={setPassword} />

        <Button width="80" value="Entrar" type="submit" />
      </Form>

      <LinkToogle register={true} path="/cadastro" />
    </Container>
  )
}