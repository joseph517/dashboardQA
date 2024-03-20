import { Component, OnInit } from '@angular/core';
import { Data } from '../../../auth/interface/user.interface';
import { UserService } from '../../services/user.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private userService: UserService
  ){}

  username!: string;

  ngOnInit(): void {
    this.userService.getUserData()
    .subscribe(user => {
        // this.username = user.name
        tap(user => localStorage.setItem('user', JSON.stringify(user)))
        this.username = user.data.username
    })
  }

}
