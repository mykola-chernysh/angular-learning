import {Component} from '@angular/core';

import {PostDetailsComponent, UserPostsComponent} from "../../components";

@Component({
  selector: 'app-post-details-page',
  standalone: true,
  imports: [
    UserPostsComponent,
    PostDetailsComponent
  ],
  templateUrl: './post-details-page.component.html',
  styleUrl: './post-details-page.component.css'
})
export class PostDetailsPageComponent {

}
