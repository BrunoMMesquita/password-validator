import { Input, Button } from "@/Presentation/components"
import { Container } from "./styled"

export function ValidationPage(): React.ReactElement {
  return (
    <Container>
      <h1>Valide sua senha</h1>
      <Input placeholder="E-mail" />
      <Button text="Enviar" onClick={() => alert('sa')} />
    </Container>
  )
}
