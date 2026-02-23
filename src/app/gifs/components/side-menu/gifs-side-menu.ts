import { Component } from '@angular/core';
import { SideMenuHeader } from "./side-menu-header/gifts-side-menu-header";
import { SideMenuOptions } from "./side-menu-options/gifts-side-menu-options";

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeader, SideMenuOptions],
  templateUrl: './gifs-side-menu.html',
})
export class SideMenu { }
