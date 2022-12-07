import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  nome:string = 'bruno';
  @Input() idade:number = 19;

  constructor() { 

    console.log('construtor')
  }
  ngOnChanges(): void {
    console.log('OnChange');
  }
  ngOnInit(): void {
    console.log("ola eu sou o metodo ativado pelo construtor")
    this.nome = `ola ${this.nome}`
  }

}
