import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";

import {UserDetailsComponent} from "../../components";

@Component({
  selector: 'app-user-details-page',
  standalone: true,
  imports: [
    UserDetailsComponent,
    RouterOutlet
  ],
  templateUrl: './user-details-page.component.html',
  styleUrl: './user-details-page.component.css'
})
export class UserDetailsPageComponent {

}
