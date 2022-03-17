import { Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {
  @Input() listadoCitas: any;
  @Output() deleteCita = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  eliminarCita(index: number){
    this.deleteCita.emit(index);

  }

}
