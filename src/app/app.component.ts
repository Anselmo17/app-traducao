import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('name') input!: ElementRef<HTMLInputElement>;
  @ViewChild('image') img!: ElementRef<HTMLInputElement>;

  title = 'app-tradutor';
  readonly translate: TranslateService;
  public mensagens: string = '';
  public commentId: string = '2344';
  public language: string = 'Português';
  public perfil: string = 'Especialistas';
  public file!: File;
  public read = false;


  constructor(tlt: TranslateService) {
    this.translate = tlt;
  }

  ngOnInit(): void {
    this.read = true;
   }

  public insertImage(event: any): void {
    this.file = event.target.files[0];

    this.input.nativeElement.innerText = this.file.name;

    const reader = new FileReader();

    let imageCurrent: any;

    reader.onload = (load) => {
      imageCurrent = load.target?.result;
      this.img.nativeElement.src = imageCurrent;
    };

    reader.readAsDataURL(this.file);
  }
}
