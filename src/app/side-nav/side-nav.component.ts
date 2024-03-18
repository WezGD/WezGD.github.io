import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    NgForOf
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  links: LinkModel[] = [
    {
      title: 'Home Page',
      icon: 'home',
      link: ''
    },
    {
      title: 'Search Page',
      icon: 'search',
      link: 'search'
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