import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SpinnerComponent),
      multi: true
    }
  ]
})
export class SpinnerComponent implements ControlValueAccessor {
  @Input() disabled = false;
  private innerValue;

  get value(){
    return this.innerValue
  }
  set value(value: number | null){
    this.innerValue = value
  }

  onChange = (value: number) => {};
  onTouched = () => {};
  writeValue(value: number): void {
    this.value = value
    this.onChange(value)
  }
  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  onModelChange(value) {
    this.value = value;
    this.onChange(value);
    this.onTouched()
  }
}
