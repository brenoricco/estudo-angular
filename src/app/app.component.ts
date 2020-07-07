import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  valorAtual: string = '';

  valorSalvo: string = '';

  isMouseOver: boolean = false;

  valor: number = 5;

  deletarCiclo: boolean = false;

  destruirCiclo() {
    this.deletarCiclo = true;
  }

  mudarValor() {
    this.valor++;
  }

  botaoClicado() {
    alert('Botão clicado');
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = false;
  }

  onMouseUp() {
    this.isMouseOver = true;
  }
}
