import { InjectionToken, NgModule } from '@angular/core';
import { IProductService, ProductService } from './product.service';

export const PRODUCTSERVICE = new InjectionToken<any>('');

@NgModule({
  imports: [],
  providers: [{ provide: PRODUCTSERVICE, useClass: ProductService }],
})
export class ProductModule {}
