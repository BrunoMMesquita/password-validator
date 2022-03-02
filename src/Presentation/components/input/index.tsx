import { FC, InputHTMLAttributes, useState } from 'react'
import { Container } from './styled'

interface IInput extends InputHTMLAttributes<HTMLInputElement> { }

export const Input: FC<IInput> = (props: IInput) => {
  const [toggle, setToggle] = useState(false)
  return (
    <Container>
      <input {...props}
        type={props.type === 'password' ?
          toggle ? 'text' : 'password' : 'text'}
        readOnly
        onFocus={e => { e.target.readOnly = false }} />
      {
        props.type === 'password' &&
        <>
          <a onClick={() => setToggle(!toggle)}>{toggle ? 'Ocultar' : 'Mostrar'}</a>
        </>
      }
    </Container>
  )
}
