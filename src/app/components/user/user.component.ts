import {Component, Input} from '@angular/core';
import {Router, RouterLink} from "@angular/router";

import {IUser} from "../../interface";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input()
  user: IUser;

  constructor(private router: Router) {
  }

  getDetails():void {
    this.router.navigate(['user', this.user.id], {
      state: this.user
    });
  }
}
