export class InvalidFieldSequenceError extends Error {
  constructor () {
    super('Senha deve conter digítos numa sequência crescente ou de mesmo valor')
    this.name = 'InvalidFieldSequenceError'
  }
}
