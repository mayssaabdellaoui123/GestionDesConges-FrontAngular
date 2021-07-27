import { Component, OnInit } from '@angular/core';
import { SignUpInfoM } from '../auth/SignUpInfo';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  form: any = {};
  private signupInfo: SignUpInfoM;
  errorMessage = '';
  isSignedUp : boolean ;

  constructor(private userService: UserService) { }

  ngOnInit() {}
  onSubmit() {
    
    this.signupInfo = new SignUpInfoM(
    this.form.firstname,
    this.form.lastname,
    this.form.username,
    this.form.email,
    this.form.password,
    this.form.phone
    );

  this.userService.signUp(this.signupInfo).subscribe(
    data => {
      console.log(data);
      this.isSignedUp = true;
    },
    error => {
      console.log(error);
      this.errorMessage = error.error.message;
    }
  );
}

}

