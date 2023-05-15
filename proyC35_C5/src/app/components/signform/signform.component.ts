import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signform',
  templateUrl: './signform.component.html',
  styleUrls: ['./signform.component.css'],
})
export class SignformComponent implements OnInit {
  nombre: string = '';
  cif: string = '';
  group: string ='';
  email: string = '';
  direccion: string ='';
  @Output() cambionombre = new EventEmitter<string>();

  @Input() formValues: any;
  constructor() {}
  ngOnInit(): void {}
  OnSubmit() {
    //const newClient = new Client( this.nombre, this.cif, this.group, this.email, this.direccion);

  }
}
