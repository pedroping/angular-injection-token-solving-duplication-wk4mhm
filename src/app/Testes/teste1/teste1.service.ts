import { Injectable } from '@angular/core';
import { IToken } from 'src/app/itoken';

@Injectable()
export class Teste1Service implements IToken {
  log(message: string) {
    alert(`${message} + 1`);
  }

  constructor() {}
}
