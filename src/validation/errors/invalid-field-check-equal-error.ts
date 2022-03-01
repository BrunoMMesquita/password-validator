export class InvalidFieldCheckEqualError extends Error {
  constructor () {
    super('Senha deve conter 2 digítos adjacentes iguais')
    this.name = 'InvalidFieldCheckEqual'
  }
}
