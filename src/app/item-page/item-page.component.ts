import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemModel } from '../../models/item-model';
import data from '../../mock/data';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-item-page',
  standalone: true,
  imports: [
    MatListModule
  ],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css'
})
export class ItemPageComponent {

  item?: ItemModel;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const itemId = this.route.snapshot.paramMap.get('id');
    if (itemId) {
      this.item = data.find((i) => i.id === itemId);
    }
  }
}
