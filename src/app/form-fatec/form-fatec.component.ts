import { Component,EventEmitter, Output } from '@angular/core';
import { Pessoa } from '../model/pessoa'

@Component({
  selector: 'app-form-fatec',
  templateUrl: './form-fatec.component.html',
  styleUrls: ['./form-fatec.component.css']
})
export class FormFatecComponent{

  @Output() pessoaAdicionada= new EventEmitter();

  cursos = ['Analise de Sistemas', 'Eventos', 'Gestão Comercial', 'Gestão de RH'];

  pessoa: Pessoa =  new Pessoa();

  salvar(pessoaForm) : void {
    this.pessoa.nome = pessoaForm.value.nome;
    this.pessoa.idade = pessoaForm.value.idade;
    this.pessoa.curso = pessoaForm.value.curso;
  
    this.pessoaAdicionada.emit(this.pessoa);
  }

}
