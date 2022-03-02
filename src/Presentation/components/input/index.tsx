import { FC, InputHTMLAttributes, useState } from 'react'
import { Container } from './styled'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  togglePassword?: boolean
}

export const Input: FC<IInput> = (props: IInput) => {
  const [toggle, setToggle] = useState(false)
  return (
    <Container>
      <input {...props} type={props.togglePassword ?
        toggle ? 'text' : 'password' : 'text'} />
      {
        props.togglePassword &&
        <>
          <a onClick={() => setToggle(!toggle)}>{toggle ? 'Ocultar' : 'Mostrar'}</a>
        </>
      }
    </Container>
  )
}
