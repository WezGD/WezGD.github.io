import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

import data from '../../mock/data';
import { ItemModel } from '../../models/item-model';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {

  constructor(private router: Router) {}

  data = data;
  displayedColumns = ['image', 'id', 'name', 'price'];

  clickedRow(item: ItemModel): void {
    this.router.navigate(['/item', { id: item.id }]);
  }
}
