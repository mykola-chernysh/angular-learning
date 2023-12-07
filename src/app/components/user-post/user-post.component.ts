import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

import {IPost} from "../../interface";

@Component({
  selector: 'app-user-post',
  standalone: true,
  imports: [],
  templateUrl: './user-post.component.html',
  styleUrl: './user-post.component.css'
})
export class UserPostComponent {
  @Input()
  post: IPost

  constructor(private router:Router) {
  }

  getPost(): void {
    this.router.navigate(['post-details', this.post.id], {state: this.post})
  }
}
