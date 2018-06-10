import { AbstractControl, ValidatorFn } from '@angular/forms';

export function emptyString(defaultValue: string) : ValidatorFn {
  return (c: AbstractControl) => {

    let isValid = c.value.length

    if(!isValid) {
      c.setValue(defaultValue)
    }
    return null;
  }
}
