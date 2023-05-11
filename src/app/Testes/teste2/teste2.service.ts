import { Injectable } from '@angular/core';
import { IToken } from '../../itoken';

@Injectable({
  providedIn: 'root',
})
export class Teste2Service implements IToken {
  log(message: string) {
    alert(`${message} + 2`);
  }

  constructor() {}
}
