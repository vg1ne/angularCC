import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

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
      count: [3]
    })
  }

  ngOnInit() {
  }

}
