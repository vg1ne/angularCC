import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

export const validationRules = {
  maxLength: 20,
  attendeesDefaultValue: 5,
  attendeesMinValue: 1
}

@Injectable({
  providedIn: 'root'
})
export class SpaceAreaService {

  constructor(private fb: FormBuilder) { }

  addAttendeesControl(count = validationRules.attendeesDefaultValue) {
    return this.fb.control(count,
      [
        Validators.required,
        Validators.min(validationRules.attendeesMinValue)
      ]
    )
  }

  addNameControl(name: string){
    return this.fb.control(name,
      [
        Validators.required,
        Validators.maxLength(validationRules.maxLength)
      ]
    )
  }

  initGroup(count?: number, name?:string) {
    return this.fb.group({
      count: this.addAttendeesControl(count),
      name: this.addNameControl(name)
    })
  }
}
