import { FC, InputHTMLAttributes } from 'react';
import { Container } from './styled';

interface IInput extends InputHTMLAttributes<HTMLInputElement> { }

export const Input: FC<IInput> = (props: IInput) => {
  return (
    <Container>
      <input {...props} />
    </Container>
  )
}
