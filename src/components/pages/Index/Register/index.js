import { useState } from 'react'

import axios from 'axios'

import { Container } from '../style'

import ImageLogo from '../../../atomics/ImageLogo'
import { Images } from '../../../../utils/img/images_import'

import Form from '../../../generics/Form'
import InputForm from '../../../atomics/Input'

import Button from '../../../atomics/Button'

import LinkToogle from '../../../atomics/LinkToogle'

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [photo, setPhoto] = useState("")

  function register() {
    const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, {
      email: email,
      name: name,
      image: photo,
      password: password
    });

    request.then((response) => {
      console.log(response)
    })

    request.catch((erro) => {
      console.log(erro)
    })
  }

  return (
    <Container>
      <ImageLogo src={Images["Logo"]} width="178" height="180" />

      <Form onSubmit={register}>
        <InputForm type="email" placeholder="email" value={email} setAttribute={setEmail} />
        <InputForm type="password" placeholder="senha" value={password} setAttribute={setPassword} />
        <InputForm type="text" placeholder="nome" value={name} setAttribute={setName} />
        <InputForm type="text" placeholder="foto" value={photo} setAttribute={setPhoto} />

        <Button width="80" value="Cadastrar" />
      </Form>

      <LinkToogle register={false} path="/" />
    </Container>
  )
}