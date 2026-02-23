import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GifService } from 'src/app/gifs/services/gifs.services';

interface MenuOption {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'gifts-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifts-side-menu-options.html',
})
export class SideMenuOptions { 

  menuOptions:MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: 'trending'
    },
        {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      subLabel: 'Gifs Search',
      route: 'search'
    }
  ]

  gifService = inject(GifService);
  
}
