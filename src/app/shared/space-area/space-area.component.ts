import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {SpaceAreaService} from "./space-area.service";

export const bookingDefaults = {
  attendeesCount: 5
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
  spaceFormGroup: FormGroup;

  constructor(private spaceAreaService: SpaceAreaService) {
  }

  ngOnInit() {
    this.spaceFormGroup = this.spaceAreaService.initGroup(this.count, this.name)
    this.form.addControl('space', this.spaceFormGroup)
  }
}
