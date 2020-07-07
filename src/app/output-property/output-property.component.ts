import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']/*,
  inputs: ['valor'],
  outputs: ['mudouValor'],*/
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    if(this.valor > 0){
      this.valor--;
    }

    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit(): void {
  }
}
