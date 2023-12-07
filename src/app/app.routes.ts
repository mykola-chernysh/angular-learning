import {Routes} from '@angular/router';

import {MainLayoutComponent} from "./layouts";
import {PostDetailsPageComponent, UserDetailsPageComponent, UserPageComponent} from "./pages";
import {UserPostsComponent} from "./components";


export const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', component: UserPageComponent},
      {
        path: 'user/:id', component: UserDetailsPageComponent, children: [
          {path: 'posts', component:UserPostsComponent}
        ]
      },
      {path: 'post-details/:id', component: PostDetailsPageComponent}
    ]
  }
];
