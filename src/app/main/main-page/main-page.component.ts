import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  count = 5
  counterGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.counterGroup = this.fb.group({
      count: [3, [
        Validators.min(1),
        Validators.max(3)
      ]]
    })
  }

  ngOnInit() {
  }

}
