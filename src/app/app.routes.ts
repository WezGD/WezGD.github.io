import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ItemPageComponent } from './item-page/item-page.component';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'search', component: SearchPageComponent },
    { path: 'item', component: ItemPageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];
