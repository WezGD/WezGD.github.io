import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ItemModel } from '../../../models/item-model';
import { NgFor } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

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

  @ViewChild('outerDiv')
  outerDivRef?: ElementRef<HTMLElement>;

  outerLandscapeClass = 'outer-div-landscape';
  outerPortraitClass = 'outer-div-portrait';

  cardLandscapeClass = 'card-landscape';
  cardPortraitClass = 'card-portrait';

  contentPortraitClass = 'portrait';

  maxCardTitleLength = 16;

  constructor(
    private responsive: BreakpointObserver,
    private router: Router ) {}

  handleClick = (id: string) => {
    this.router.navigate(['/item', { id: id }]);
  }

  checkForDuplicates(newItem: ItemModel, items: ItemModel[]) {
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

    this.responsive.observe([Breakpoints.XSmall]).subscribe((value) => {
      const outerDiv = this.outerDivRef?.nativeElement;
      const cardElems = document.querySelectorAll('mat-card');
      if (value.breakpoints[Breakpoints.XSmall]) {
        this.maxCardTitleLength = 32;
        outerDiv?.classList.remove(this.outerLandscapeClass);
        outerDiv?.classList.add(this.outerPortraitClass);
        cardElems.forEach((elem) => {
          if (!elem.classList.contains(this.cardPortraitClass)) {
            elem.classList.remove(this.cardLandscapeClass);
            elem.classList.add(this.cardPortraitClass);
            elem.children.item(1)?.classList.add(this.contentPortraitClass);
          }
        });
      } else {
        this.maxCardTitleLength = 16;
        outerDiv?.classList.remove(this.outerPortraitClass);
        outerDiv?.classList.add(this.outerLandscapeClass);
        cardElems.forEach((elem) => {
          if (!elem.classList.contains(this.cardLandscapeClass)) {
            elem.classList.remove(this.cardPortraitClass);
            elem.classList.add(this.cardLandscapeClass);
            elem.children.item(1)?.classList.remove(this.contentPortraitClass);
          }
        });
      }
    });
  }
}
