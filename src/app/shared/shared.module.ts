import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material";
import { NameReactiveComponent } from './name-reactive/name-reactive.component';
import { SpaceAreaComponent } from './space-area/space-area.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  declarations: [
    SpinnerComponent,
    NameReactiveComponent,
    SpaceAreaComponent,
  ],
  exports: [
    SpinnerComponent,
    NameReactiveComponent,
    SpaceAreaComponent,
  ]
})
export class SharedModule { }
