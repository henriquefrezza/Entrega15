import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TesteEstiloComponent } from './teste-estilo/teste-estilo.component';
import { FormFatecComponent } from './form-fatec/form-fatec.component';
import { PessoaCartaoComponent } from './pessoa-cartao/pessoa-cartao.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteEstiloComponent,
    FormFatecComponent,
    PessoaCartaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
