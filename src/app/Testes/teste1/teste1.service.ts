import { IToken } from '../../itoken';

export class Teste1Service implements IToken {
  log(message: string) {
    alert(`${message} + 1`);
  }

  constructor() {}
}
