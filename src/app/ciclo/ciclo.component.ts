import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css'],
})
export class CicloComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() valorInicial: number = 10;

  constructor() {
    this.log('Constructor');
  }

  //HOOKS

  //Executado antes do OnInit e quando ovalor property binding é atualizado
  ngOnChanges() {
    this.log('NgOnChanges');
  }

  //Executado quando o componente é iniciado
  ngOnInit(): void {
    this.log('NgOnInit');
  }

  //Executado a cada cicclo de verificação de mudanças
  ngDoCheck() {
    this.log('NgDoCheck');
  }

  //Executado depois de inserir um conteudo externo na view
  ngAfterContentInit() {
    this.log('NgAfterContentInit');
  }

  //Executado a cada verificação de conteúdo inserido
  ngAfterContentChecked() {
    this.log('NgAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  //Executado a cada verificação de conteúdo / conteúdo filho
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  //Executado antes do componente ser destruido
  ngOnDestroy() {
    this.log('NgOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
