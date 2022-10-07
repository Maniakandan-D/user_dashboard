import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup;
  apiEndpoint: string  = environment.BackendApiEndpointSignup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,
     private router: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:['',[ Validators.required, Validators.email]],
      password:['',[ Validators.required, Validators.minLength(8)]],
    }, {updateOn: 'change' });
  }

  login(): void{
    localStorage.setItem('isLoggedin', 'true');
    this.http.get<any>(`${this.apiEndpoint}`)
    .subscribe({
     next: (res: any[]) =>{
     const user = res.find((a: any) =>{
       return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
     });
     if(user){
       alert("Login success!!");
       this.loginForm.reset();
       this.router.navigate(['/dashboard'])
     } else{
       alert("data not found")
     }
     },
     error: (err: any) => {
       alert("Something went wrong during Login")
    }
   });
  return
 }
}
