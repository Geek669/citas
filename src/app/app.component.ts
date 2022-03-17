import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 listCitas: any[] = []; // aqui inicializamos un array tipo any, lo inicializamos en vacio

 agregarCita(cita: any){
   this.listCitas.push(cita);
   console.log(this.listCitas);

 }
 eliminarCitaListado(index:number){
   this.listCitas.splice(index, 1);
 }

}
