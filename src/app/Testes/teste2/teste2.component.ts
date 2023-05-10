import { Component, Inject, OnInit } from '@angular/core';
import { PRODUCTSERVICE } from '../../productmodule/product.module';
import { Teste2Service } from './teste2.service';
import { IToken } from '../../itoken';

@Component({
  selector: 'app-teste2',
  templateUrl: './teste2.component.html',
  styleUrls: ['./teste2.component.css'],
  providers: [{ provide: PRODUCTSERVICE, useClass: Teste2Service }],
})
export class Teste2Component implements OnInit {
  constructor(@Inject(PRODUCTSERVICE) private service: IToken) {}

  ngOnInit() {}

  teste() {
    this.service.log('Teste');
  }
}
