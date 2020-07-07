import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  valorAtual: string = '';

  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome: string = 'abc';

  myName: string = 'Breno';

  valorInicial: number = 15;

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  constructor() { }

  ngOnInit(): void {
  }

  botaoClicado() {
    alert("Botão clicado");
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

  onMudouValor(event) {
    console.log(event.novoValor)
  }

}
