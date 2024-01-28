import { Injectable } from '@angular/core';
import {AbstractControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor() {}

  static notInArray(options: string[]): any {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.touched && control.value.length > 10) {
        if (options.indexOf(control.value) > -1) {
          return {indisponivel: true};
        }
      }
      return null;
    };
  }


  static findInvalidControls(form: FormGroup) {
    const invalid = [];
    const controls = form.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }
}
