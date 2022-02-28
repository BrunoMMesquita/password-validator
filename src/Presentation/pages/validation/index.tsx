import { Input, Button } from '@/Presentation/components'
import { Container, WrapperButton, WrapperInputs, MessageError } from "./styled"

export function ValidationPage(): React.ReactElement {
  return (
    <Container>
      <div>
        <h1>Valide sua senha</h1>
        <WrapperInputs>
          <Input placeholder='Nome' />
          <Input placeholder='E-mail' />
          <Input placeholder="Senha" type='password' />
        </WrapperInputs>
        <MessageError>
          <span>Senha inválida</span>
          <p>sasas</p>
        </MessageError>
        <WrapperButton>
          <Button text="Enviar" onClick={() => alert('sa')} />
        </WrapperButton>
      </div>
    </Container>
  )
}
