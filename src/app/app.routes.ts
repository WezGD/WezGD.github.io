import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'search', component: SearchPageComponent },
];
