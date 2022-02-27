import { FC, InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export const Input:FC<IInput> = (props: IInput) => {
  return (
    <input {...props} />
  )
}
