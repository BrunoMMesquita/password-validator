import { Input } from "@/Presentation/components/input"
import { Container } from "./styled"

export function ValidationPage(): React.ReactElement {
  return (
    <Container>
      <h1>Valide sua senha</h1>
      <Input placeholder="E-mail" />
    </Container>
  )
}
