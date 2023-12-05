import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

import {UserService} from "../../services";
import {IPost, IUser} from "../../interfaces";
import {UsersPostsComponent} from "../user-posts";
import {UserComponent} from "../user";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    NgForOf,
    UsersPostsComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: IUser[];
  posts: IPost[];

  constructor(private UserService:UserService) {
  }

  ngOnInit(): void {
    this.UserService.getAll().subscribe(value => this.users = value);
  }

  getPosts(userId: number ) {
    this.UserService.getPostByUserId(userId).subscribe(value => this.posts = value);
  }
}
