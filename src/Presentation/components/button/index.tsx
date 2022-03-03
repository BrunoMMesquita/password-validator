import { FC, ButtonHTMLAttributes } from 'react'
import { ButtonOta } from './styled'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
}

export const Button: FC<IButton> = (props: IButton) => {
  return (
    <ButtonOta data-testid={props.name} {...props}>
      {props.text}
    </ButtonOta>
  )
}
