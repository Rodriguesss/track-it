import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Loader from "react-loader-spinner";

import axios from 'axios'

import { Container } from '../style'

import ImageLogo from '../../../atomics/ImageLogo'
import { Images } from '../../../../utils/img/images_import'

import Form from '../../../generics/Form'
import InputForm from '../../../atomics/InputForm'

import Button from '../../../atomics/Button'

import LinkToogle from '../../../atomics/LinkToogle'

export default function Register() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [photo, setPhoto] = useState("")

  const [buttonValue, setButtonValue] = useState("Cadastrar")
  const [buttonColor, setButtonColor] = useState("#52B6FF")
  const [disabled, setDisabled] = useState(false)

  function register(event) {
    setButtonValue(<Loader type="ThreeDots" color="#FFFFFF" height={10} width={80} timeout={3000} />)
    setDisabled(true)
    setButtonColor("#52B6FFbb")

    event.preventDefault()

    setTimeout(() => {
      const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, {
        email: email,
        name: name,
        image: photo,
        password: password
      });

      request.then(() => {
        navigate('/')
      })

      request.catch((error) => {
        alert('Erro ao cadastrar usuário: ' + error.response.data.message)

        setButtonValue("Cadastrar")
        setDisabled(false)
        setButtonColor("#52B6FF")
      })
    }, 2000)
  }

  return (
    <Container>
      <ImageLogo src={Images["Logo"]} width="178" height="180" />

      <Form onSubmit={register} width="80">
        <InputForm type="email" placeholder="email" value={email} setAttribute={setEmail} disabled={disabled} />
        <InputForm type="password" placeholder="senha" value={password} setAttribute={setPassword} disabled={disabled} />
        <InputForm type="text" placeholder="nome" value={name} setAttribute={setName} disabled={disabled} />
        <InputForm type="text" placeholder="foto" value={photo} setAttribute={setPhoto} disabled={disabled} />

        <Button width="100" value={buttonValue} disabled={disabled} type="submit" color={buttonColor} />
      </Form>

      <LinkToogle register={false} path="/" />
    </Container>
  )
}