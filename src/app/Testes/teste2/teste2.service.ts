import { IToken } from '../../itoken';

export class Teste2Service implements IToken {
  log(message: string) {
    alert(`${message} + 2`);
  }

  constructor() {}
}
