import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import collection from '../../mock/collection';

@Component({
  selector: 'app-collection-page',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './collection-page.component.html',
  styleUrl: './collection-page.component.css'
})
export class CollectionPageComponent {
  collection = collection;
  displayedColumns = ['new-for-sale', 'new-sold', 'used-for-sale', 'used-sold']
}
