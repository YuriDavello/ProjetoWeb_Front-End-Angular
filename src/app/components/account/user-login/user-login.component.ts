import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/userlogin';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username?: string;
  password?: string;

  user?: UserLogin = new UserLogin();

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
  }

  public login() {
    this.user!.username = this.username;
    this.user!.password = this.password;

    this.usersService.login(this.user!);
  }

}
