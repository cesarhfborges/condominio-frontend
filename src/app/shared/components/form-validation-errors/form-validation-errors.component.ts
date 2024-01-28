import {Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {CustomValidatorService} from "./service/custom-validator.service";
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-form-validation-errors',
  templateUrl: './form-validation-errors.component.html',
  styleUrls: ['./form-validation-errors.component.scss'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateY(-10px)'}),
        animate('200ms', style({opacity: 1, transform: 'translateY(0)'})),
      ]),
      transition(':leave', [
        animate('200ms', style({opacity: 0, transform: 'translateY(-10px)'})),
      ]),
    ]),
  ],
  providers: [
    CustomValidatorService
  ]
})
export class FormValidationErrorsComponent implements OnInit {

  @Input({ required: true }) control: AbstractControl;
  @Input() submitted: boolean = true;

  constructor() {
  }

  get errorMessage(): any {
    for (const propriedade in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propriedade) && this.control.touched && this.control.enabled) {
        return CustomValidatorService.getValidatorErrorMessage(propriedade, this.control.errors[propriedade]);
      }
    }
    return null;
  }

  ngOnInit(): void {
  }
}
