import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  public data = [
    { title: 'Dr' },
    { title: 'Mr' },
    { title: 'Mrs' },
    { title: 'Ms' },
  ];
  form = new FormGroup({
    submitform: new FormControl('', Validators.required),
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    tandc: new FormControl('', Validators.required),
  });
  submit() {
    console.log(this.form.value);
  }
}
