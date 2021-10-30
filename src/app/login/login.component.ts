import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';

/**
 *
 *
 * @export
 * @class LoginComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  title: string = 'Login';
  error: string;

  /**
   * Creates an instance of LoginComponent.
   * @param {Router} router
   * @memberof LoginComponent
   */
  constructor(public router: Router, public utilityService: UtilityService) {}

  /**
   *
   *
   * @memberof LoginComponent
   */
  ngOnInit(): void {}

  /**
   *
   *
   * @param {NgForm} f
   * @memberof LoginComponent
   */
  signIn(f: NgForm) {
    // console.log('this.formGroup.value', f.value);
    // this.displaySpinner = true;
    // this.utilityService.addRequest(f.value, 'login').subscribe(
    //   (res) => {
    //     this.utilityService.sendDataViaService(res);
    //     // this.displaySpinner = false;
    //     //  this.reviewer = res.body['Data'];
    //     sessionStorage.setItem('userName', f.value.EmployeeId);
    //     this.router.navigate(['/home']);
    //   },
    //   (error) => {
    //     // this.displaySpinner = false;
    //     //  this.error = error;
    //     this.error = 'Invalid User Name/Password';
    //   }
    // );

    if (f.value.EmployeeId === 'admin' && f.value.password === 'admin') {
      sessionStorage.setItem('userName', f.value.username);
      this.router.navigate(['/home']);
    }
  }

  /**
   *
   *
   * @param {NgForm} f
   * @memberof LoginComponent
   */
  signUp(f: NgForm) {
    // console.log('inside', f.value);
  }
}
