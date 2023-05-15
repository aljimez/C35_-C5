import { Component,OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signform',
  templateUrl: './signform.component.html',
  styleUrls: ['./signform.component.css']
})
export class SignformComponent implements OnInit{
  @Input() nombre: string = 'sin nombre';
  @Output() cambionombre = new EventEmitter<string>;

ngOnInit(): void {

}
OnSubmit(){/*
  this.nombre = 'Alejandro';
  this.cif = '43720';
  this.group = '2';
  this.email = 'aajja@gmail.com';
  this.direccion = 'Detras tuya';*/
}
}
