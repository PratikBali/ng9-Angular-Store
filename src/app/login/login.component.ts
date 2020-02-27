import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

export class InputData {
  username;
  password;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  responseData;
  inputData = new InputData();
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginService.getCredentials().subscribe(
      response => {
        this.responseData = response;
      }
    );
  }

  checkLogin() {
    if (this.inputData.username === this.responseData.credentials.username && this.inputData.password === this.responseData.credentials.password) {
      this.router.navigate(['book-list']);
    }
  }

}
