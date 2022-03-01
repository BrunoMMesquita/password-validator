import { Input, Button, Spiner } from '@/Presentation/components'
import { Authentication } from '@/domain/models'
import { makePasswordValidation } from '@/main/validation'
import { useState } from 'react'
import { Container, WrapperButton, WrapperInputs, MessageError } from './styled'
import { onlyNumber } from '@/Presentation/utils/functions'

enum errorsInput {
  name = 'Nome inválido',
  email = 'E-mail Inválido',
  password = 'Senha inválida'
}

export function ValidationPage(): React.ReactElement {
  const [auth, setAuth] = useState({} as Authentication)
  const [isLoading, setIsLoading] = useState(false)
  const [formErrors, setFormErrors] = useState([])

  const formInvalid = (): boolean => {
    const fields = ['name', 'email', 'password']
    let errorsField = []

    fields.forEach(field => {
      const errors = makePasswordValidation().validate(field, auth)
      if (!!errors.length) {
        errorsField = [...errorsField, {
          field,
          errors
        }]
      }
    })

    if (!!errorsField.length){
      setFormErrors(errorsField)
      return true
    }

    return false
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formInvalid())
      return

    alert('abjas')
  }

  if (isLoading)
    return <Spiner />

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Valide sua senha</h1>
        <WrapperInputs>
          <Input
            placeholder='Nome'
            value={auth.name}
            onChange={(e) => setAuth({ ...auth, name: e.target.value })} />
          <Input
            placeholder='E-mail'
            value={auth.email}
            onChange={(e) => setAuth({ ...auth, email: e.target.value })} />
          <Input
            placeholder="Senha"
            type='password'
            value={auth.password}
            onChange={(e) => setAuth({ ...auth, password: onlyNumber(e.target.value) })} />
        </WrapperInputs>
        <MessageError>
          {
            formErrors.map((error) => {
              return (
                <>
                  <span>{errorsInput[error.field]}</span>
                  {
                    error.errors.map((message: string) => <li>{message}</li>)
                  }
                </>
              )
            })
          }
        </MessageError>
        <WrapperButton>
          <Button text="Enviar" type="submit" />
        </WrapperButton>
      </form>
    </Container>
  )
}
