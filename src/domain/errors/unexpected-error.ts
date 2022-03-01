export class UnexpectedError extends Error {
  constructor () {
    super('Falha ao enviar resultado. Tente novamente.')
    this.name = 'UnexpectedError'
  }
}
