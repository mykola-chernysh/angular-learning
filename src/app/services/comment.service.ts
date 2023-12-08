import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../interface";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }

  getComments(id: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments.commentsByPostId(id));
  }
}
