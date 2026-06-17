import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.html',
  styleUrl: './persona.scss'
})
export class Persona {

  fechaMaxima: string = '';

  constructor() {

    const hoy = new Date();

    this.fechaMaxima = hoy.toISOString().split('T')[0];
  }

}