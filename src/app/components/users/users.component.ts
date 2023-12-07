import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

import {IUser} from "../../interface";
import {UserService} from "../../services";
import {UserComponent} from "../user/user.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    NgForOf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private UserService: UserService) {
  }

  ngOnInit(): void {
    this.UserService.getAll().subscribe(value => this.users = value);
  }
}
