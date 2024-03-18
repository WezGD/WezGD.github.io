import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CardModel } from '../../../models/card-model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card-display',
  standalone: true,
  imports: [MatCardModule, MatListModule, NgFor],
  templateUrl: './card-display.component.html',
  styleUrl: './card-display.component.css'
})
export class CardDisplayComponent {
  cards: CardModel[] = [
    {
      name: 'placeholder1',
      id: '00001',
      price: 10
    },
    {
      name: 'placeholder2',
      id: '00002',
      price: 100
    },
    {
      name: 'placeholder3',
      id: '00003',
      price: 20
    },
    {
      name: 'placeholder4',
      id: '00004',
      price: 200
    },
    {
      name: 'placeholder5',
      id: '00005',
      price: 20
    },
    {
      name: 'placeholder6',
      id: '00006',
      price: 200
    }
  ]
}
