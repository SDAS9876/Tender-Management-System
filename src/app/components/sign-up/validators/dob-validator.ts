import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class DobValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const { value } = control;

    if (
      parseInt(((Date.now() - Date.parse(value)) / 3.156e10).toString()) >= 18
    )
      return null;

    return {
      ageLessThan18: true,
    };
  }
}
