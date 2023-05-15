import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignformComponent } from './signform/signform.component';
import { ClientlistComponent } from './clientlist/clientlist.component';



@NgModule({
  declarations: [
    SignformComponent,
    ClientlistComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    SignformComponent,
    ClientlistComponent
  ]
})
export class ComponentsModule { }
