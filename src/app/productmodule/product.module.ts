import { InjectionToken, NgModule } from '@angular/core';
import { IToken } from '../itoken';
import { IProductService, ProductService } from './product.service';

export const PRODUCTSERVICE = new InjectionToken<IToken>('');

@NgModule({
  imports: [],
  providers: [],
})
export class ProductModule {}
