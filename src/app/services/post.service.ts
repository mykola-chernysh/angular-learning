import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment, IPost} from "../interface";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) {
  }

  getById(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>(urls.posts.byId(id));
  }

  getComments(id: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.posts.commentsById(id));
  }
}
