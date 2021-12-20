import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent implements OnInit {

  username?: string;
  url?: string = 'https://pwe-project-confirmation-api.herokuapp.com'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public confirm() {
    let obj = {
      username: this.username
    }
    let obs = this.http.post(`${this.url}/confirm`, obj);
    obs.subscribe(
      (resp) => {
        console.log(resp)
      }
    );
    this.username = " ";
    alert("Confirmando seu e-mail...");
    this.router.navigate(['/login']);
    return obs;
  }

}
