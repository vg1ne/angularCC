import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Display} from "../../shared/space-area/space-area.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  count = 3
  name = 'bla'
  formGroup: FormGroup;
  displayType = Display.OneLine

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({})
  }

  ngOnInit() {
  }
}
