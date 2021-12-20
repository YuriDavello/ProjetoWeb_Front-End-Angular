import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersData } from 'src/app/models/usersdata';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  username?: string;
  password?: string;
  confPassword?: string;
  nome?: string;
  cpf?: string;
  nascimento?: string;
  telefone?: string;

  user?: User = new User();
  usersData?: UsersData = new UsersData();

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
  }

  public register() {
    this.user!.username = this.username;
    this.user!.password = this.password;
    this.usersData!.nome = this.nome;
    this.usersData!.cpf = this.cpf;
    this.usersData!.nascimento = this.nascimento;
    this.usersData!.telefone = this.telefone;
    this.user!.usersData = this.usersData;

    this.usersService.register(this.user!);

    this.username = " ";
    this.password = " ";
    this.confPassword = " ";
    this.nome = " ";
    this.cpf = " ";
    this.nascimento = " ";
    this.telefone = " ";
    alert("Email de confirmação enviado")
  }

}
