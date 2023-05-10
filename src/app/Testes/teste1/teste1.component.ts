import { Component, Inject, OnInit } from '@angular/core';
import { PRODUCTSERVICE } from '../../productmodule/product.module';
import { Teste1Service } from './teste1.service';
import { IToken } from '../../itoken';

@Component({
  selector: 'app-teste1',
  templateUrl: './teste1.component.html',
  styleUrls: ['./teste1.component.css'],
  providers: [{ provide: PRODUCTSERVICE, useClass: Teste1Service }],
})
export class Teste1Component implements OnInit {
  constructor(@Inject(PRODUCTSERVICE) private service: IToken) {}

  ngOnInit() {}

  teste(){
    this.service.log("Teste")
  }
}
