import { Input } from '@/Presentation/components'
import { render, fireEvent, screen } from '@testing-library/react'
import { Default } from '@/Presentation/styles/themes'

import { ThemeProvider } from 'styled-components';
import faker from 'faker'

const makeSut = (fieldName: string): void => {
  render(
    <ThemeProvider theme={Default}>
      <Input name={fieldName} type="text" id={fieldName}  />
    </ThemeProvider>
  )
}

describe('Input Component', () => {
  test('Should begin with readOnly', () => {
    const field = faker.database.column()
    makeSut(field)
    const input = screen.getByTestId(field) as HTMLInputElement

    expect(input.readOnly).toBe(true)
  })

  test('Should remove readOnly on focus', () => {
    const field = faker.database.column()
    makeSut(field)
    const input = screen.getByTestId(field) as HTMLInputElement

    fireEvent.focus(input)

    expect(input.readOnly).toBe(false)
  })
})
