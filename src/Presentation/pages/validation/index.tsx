import { Input, Button } from "@/Presentation/components"
import { Container, WrapperButton } from "./styled"

export function ValidationPage(): React.ReactElement {
  return (
    <Container>
      <div>
        <h1>Valide sua senha</h1>
        <Input placeholder='Nome' />
        <Input placeholder='E-mail' />
        <Input placeholder="Senha" type='password' />
        <WrapperButton>
          <Button text="Enviar" onClick={() => alert('sa')} />
        </WrapperButton>
      </div>
    </Container>
  )
}
