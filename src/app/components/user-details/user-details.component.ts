import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";

import {IUser} from "../../interface";
import {UserService} from "../../services";
import {UserPostsComponent} from "../user-posts/user-posts.component";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    NgIf,
    UserPostsComponent
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.user = this.router.getCurrentNavigation()?.extras.state as IUser;

      if (!this.user) {
        this.userService.getById(id).subscribe(value => this.user = value);
      }
    })
  }

  getPosts(): void {
    this.router.navigate(['posts'], {relativeTo: this.activatedRoute});
  }
}
