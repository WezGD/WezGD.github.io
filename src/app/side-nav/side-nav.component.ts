import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    NgForOf,
    RouterModule
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  links: LinkModel[] = [
    {
      title: 'Home',
      icon: 'home',
      link: 'home'
    },
    {
      title: 'Search Catalog',
      icon: 'search',
      link: 'search'
    },
    {
      title: 'My Collection',
      icon: 'apps',
      link: 'collection' // Eventually add ID param
    },
    {
      title: 'My Wishlists',
      icon: 'library_books',
      link: 'wishlists' // Eventually add ID param
    }
  ]

  changeRoute = (route: string) => {
    window.location.href = route;
  }
}

interface LinkModel {
  link: string;
  icon: string;
  title: string;
}
