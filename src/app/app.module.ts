import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductModule } from './productmodule/product.module';
import { SomeOtherModule } from './somothermodule/some-other.module';
import { Teste1Component } from './Testes/teste1/teste1.component';
import { Teste1Service } from './Testes/teste1/teste1.service';
import { Teste2Component } from './Testes/teste2/teste2.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ProductModule, SomeOtherModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Teste1Component,
    Teste2Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
