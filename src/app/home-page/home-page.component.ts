import { Component } from '@angular/core';
import { CardDisplayComponent } from './card-display/card-display.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardDisplayComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
