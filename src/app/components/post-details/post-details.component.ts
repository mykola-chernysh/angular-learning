import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

import {IComment, IPost} from "../../interface";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";
import {PostCommentsComponent} from "../post-comments/post-comments.component";

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [
    PostCommentsComponent,
    NgForOf
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  post: IPost;
  comments: IComment[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.post = this.router.getCurrentNavigation()?.extras.state as IPost;

      if (!this.post) {
        this.postService.getById(id).subscribe(value => this.post = value);
      }

      this.postService.getComments(id).subscribe(value => this.comments = value);
    })
  }
}
