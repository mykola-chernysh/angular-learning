import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

import {IPost} from "../../interfaces";
import {PostComponent} from "../post";

@Component({
  selector: 'app-users-posts',
  standalone: true,
  imports: [
    PostComponent,
    NgForOf
  ],
  templateUrl: './users-posts.component.html',
  styleUrl: './users-posts.component.css'
})
export class UsersPostsComponent{
  @Input()
  posts: IPost[];

}
