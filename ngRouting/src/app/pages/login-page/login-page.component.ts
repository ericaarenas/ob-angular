import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {



  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

    let token = sessionStorage.getItem('token')
    if(token) {
      this.router.navigate(['home'])
    }
    
  }
  loginUser(value: any) {
    let {email, password} = value;

    this.authService.login(email, password).subscribe(
       (response: any) => {
        if(response.token) {
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['home'])
        }
      },
      (error: any) => console.error(`Ha habido un error al hacer login: ${error.message}`),
      () => console.info('Petición de login terminado')
    )
  }
}
