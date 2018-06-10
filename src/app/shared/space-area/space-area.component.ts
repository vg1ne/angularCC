import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {SpaceAreaService} from "./space-area.service";

export const bookingDefaults = {
  attendeesCount: 5
}

export enum Display {
  OneLine = 'OneLine',
  Columns = 'Columns'
}

@Component({
  selector: 'app-space-area',
  templateUrl: './space-area.component.html',
  styleUrls: ['./space-area.component.scss']
})
export class SpaceAreaComponent implements OnInit {
  @Input() count = bookingDefaults.attendeesCount
  @Input() name
  @Input() form: FormGroup;
  @Input() displayType = Display.OneLine
  spaceFormGroup: FormGroup;

  constructor(private spaceAreaService: SpaceAreaService) {
  }

  ngOnInit() {
    this.spaceFormGroup = this.spaceAreaService.initGroup(this.count, this.name)
    this.form.addControl('space', this.spaceFormGroup)
  }

  get isOneLineMode() {
    return this.displayType === Display.OneLine
  }

  get fxFlexLayout() {
    return this.displayType === Display.OneLine ? 'row' : 'column'
  }

  get showAllErrorsUnder() {
    return !this.isOneLineMode
  }

  get showAttendeesErrorsUnder() {
    return this.isOneLineMode && this.hasAttendeesError
  }

  get showNameErrorsUnder() {
    return this.isOneLineMode && this.hasNameError
  }

  get hasNameError() {
    return this.form.get('space.name').invalid
  }

  get hasAttendeesError() {
    return this.form.get('space.count').invalid
  }

  get attendeesFlex() {
    return this.isOneLineMode ? 20 : 100
  }
}
