import { Component } from '@angular/core';
import { CardDisplayComponent } from './card-display/card-display.component';
import data from '../../mock/data';
import sets from '../../mock/sets';
import figures from '../../mock/figures';
import { ItemModel } from '../../models/item-model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardDisplayComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  data: ItemModel[] = data;
  sets: ItemModel[] = sets;
  figures: ItemModel[] = figures;
}
