import { Injectable } from '@angular/core';
import { IToken } from '../../itoken';

@Injectable({
  providedIn: 'root',
})
export class Teste1Service implements IToken {
  log(message: string) {
    alert(`${message} + 1`);
  }

  constructor() {}
}
