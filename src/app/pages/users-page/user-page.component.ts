import { Component } from '@angular/core';

import {UsersComponent} from "../../components";

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [
    UsersComponent
  ],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
