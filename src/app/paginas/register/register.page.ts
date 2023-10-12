import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  public estado: String = '';
  public mensaje = '';

  constructor(private auth: AuthenticationService) {}

  user = {
    username: '',
    pw: '',
    birth: '',
    email: '',
  };

  register() {
    if((this.user.username.length && this.user.pw.length && this.user.email.length) != 0) {
      this.auth
      .register(this.user.username, this.user.pw, this.user.birth, this.user.email)
      .then((res) => { this.mensaje = 'Registro Exitoso'; })
    }
    else {
      this.mensaje = 'Error en Registro';
    }
  }
}
