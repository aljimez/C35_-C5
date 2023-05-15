import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent {
  @Input() formValues!: any[];
  nuevoNombre: string = '';
  nuevoCIF: string = '';
  nuevaDireccion: string = '';
  nuevoGrupo: number = 0;
}
