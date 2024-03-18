import { Component } from '@angular/core';
import { CardDisplayComponent } from './card-display/card-display.component';
import data from '../../mock/data';
import { CardModel } from '../../models/card-model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardDisplayComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  data: CardModel[] = data;
}
