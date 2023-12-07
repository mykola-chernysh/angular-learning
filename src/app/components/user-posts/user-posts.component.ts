import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForOf} from "@angular/common";

import {UserService} from "../../services";
import {IPost} from "../../interface";
import {UserPostComponent} from "../user-post/user-post.component";

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [
    UserPostComponent,
    NgForOf
  ],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.css'
})
export class UserPostsComponent {
  posts: IPost[];

  constructor(private activatedRoute:ActivatedRoute, private userService:UserService) {
    this.activatedRoute.parent?.params.subscribe(({id}) => {
      this.userService.getPostsById(id).subscribe(value => this.posts = value);
    })
  }
}
