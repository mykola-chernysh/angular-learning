import {Component, Input} from '@angular/core';

import {IComment} from "../../interface";

@Component({
  selector: 'app-post-comments',
  standalone: true,
  imports: [],
  templateUrl: './post-comments.component.html',
  styleUrl: './post-comments.component.css'
})
export class PostCommentsComponent {
  @Input()
  comment: IComment;

  constructor() {
  }

}
