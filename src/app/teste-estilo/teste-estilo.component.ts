import { Component } from '@angular/core';

@Component({
  selector: 'app-teste-estilo',
  templateUrl: './teste-estilo.component.html',
  styleUrls: [ './teste-estilo.component.css'
  ]
})

export class TesteEstiloComponent {

  obterEstilos(){
    return{
      'background-color': 'black',
      'color': 'white',
      'margin-top': '10px',
      'border':'2px solid red',
      'text-align':'center',
      'border-radius':'4px',
      'padding':'20px'
    }
  }

  obterClasse(){
    return['conteudo'];
  }
}
