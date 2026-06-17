import { Component } from '@angular/core';
import { Persona } from './app/persona/persona';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Persona],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}