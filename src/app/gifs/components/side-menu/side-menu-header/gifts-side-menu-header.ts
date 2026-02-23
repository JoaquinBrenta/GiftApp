import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'gifts-side-menu-header',
  imports: [],
  templateUrl: './gifts-side-menu-header.html',
})
export class SideMenuHeader {
  envs = environment
 }
