import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core/services/auth.service";
import {SessionService} from "../../core/session/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private session: SessionService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      email: ['cesar_silk321@hotmail.com', [Validators.required, Validators.email]],
      password: ['000000', [Validators.required, Validators.minLength(6)]],
      remember: [true, [Validators.required]],
    });
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe({
        next: res => {
          console.log(res);
          this.session.setAuth(res);
          this.router.navigate(['/home']).catch();
        },
        error: e => {
          console.error(e);
        }
      });
    } else {
      console.error('invalid');
    }
  }
}
