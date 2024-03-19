import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ItemModel } from '../../../models/item-model';
import { NgFor } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-card-display',
  standalone: true,
  imports: [MatCardModule, MatListModule, NgFor],
  templateUrl: './card-display.component.html',
  styleUrl: './card-display.component.css'
})
export class CardDisplayComponent {

  @Input("title")
  title: string = 'Title';

  @Input("data")
  cards: ItemModel[] = [];

  constructor(private responsive: BreakpointObserver) {}

  checkForDuplicates(newItem: ItemModel, items: ItemModel[]) {
    console.log('duplicate');
    for(let item of items) {
      if(item === newItem) {
        return false;
      }
    }
    return false;
  }

  ngOnInit() {
    if (this.cards.length > 6) {
      const newCards: ItemModel[] = [];
      const chosenCards: number[] = [];
      for (let i = 0; i < 6; i++) {
        let newIndex: number;
        do {
          newIndex = Math.floor(Math.random() * this.cards.length);
        } while (this.checkForDuplicates(this.cards[newIndex], this.cards))
        newCards[i] = this.cards[newIndex];
        chosenCards[i] = newIndex;
      }
      this.cards = newCards;
    }

    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe(() => {
      console.log('change styling');
    });
  }
}
