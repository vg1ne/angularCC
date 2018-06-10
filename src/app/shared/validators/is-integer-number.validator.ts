import { AbstractControl, ValidatorFn } from '@angular/forms';

export function isIntegerNumber(c: AbstractControl) {
  return Number.isInteger(c.value) ? null : {
    validateIsInteger: {
      valid: false
    }
  };
}
