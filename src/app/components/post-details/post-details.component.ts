import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

import {IComment, IPost} from "../../interface";
import {PostCommentsComponent} from "../post-comments/post-comments.component";
import {CommentService, PostService} from "../../services";

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private commentService: CommentService, private postService:PostService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.post = this.router.getCurrentNavigation()?.extras.state as IPost;

      if (!this.post) {
        this.postService.getById(id).subscribe(value => this.post = value);
      }

      this.commentService.getComments(id).subscribe(value => this.comments = value);
    })
  }
}
