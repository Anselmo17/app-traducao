import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-tradutor';
  readonly translate: TranslateService;
  public mensagens: string = '';
  public commentId: string = '2344';
  public language: string = 'Português';
  public perfil: string = 'Especialistas';


  constructor(tlt: TranslateService) {
    this.translate = tlt;
  }

  ngOnInit(): void {}

  // metodo para enviar mensagem no serviço ja que nao tem html
  showTranslationAlert(){
     // adicionando tradução com variaveis
     this.translate.get('comments').subscribe((response: string) => {
      // nessa parte pegar o conteudo da variavel e adicionar na mensagen 
      console.log('------------ comentarios --------------', response);

      // adicionar a mensagem de alerta aqui
    });
  }
}
