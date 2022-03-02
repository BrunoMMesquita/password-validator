export class InvalidFieldBetweenValuesError extends Error {
  constructor (valueStart: number, valueEnd: number) {
    super(`Senha deve estar entre os números ${valueStart} e ${valueEnd}`);
    this.name = 'InvalidFieldBetweenValuesError'
  }
}
