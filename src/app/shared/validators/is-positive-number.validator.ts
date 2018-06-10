import { AbstractControl, ValidatorFn } from '@angular/forms';

export function isPositiveNumber(c: AbstractControl) {
  return (c.value > 0) ? null : {
    validateIsPositiveNumber: {
      valid: false
    }
  };
}
