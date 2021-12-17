import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import { USERS } from '../test-user-data';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  getUserData(): void {
    this.userService.getUserNames().subscribe(users => this.users = users)
    // this.userService.getUserAges().subscribe(users => this.users = users)

    // You need to mutate the data here to combine the requests, this is also where you would "fill" any holes in the data so the table view would be complete. Possibly using forkJoin or combineLatest. I wanted to try to work more with observables because I hadn't worked with them before, but ended up taking up more time than if I had just worked with promises.
  }


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserData();
  }

}
