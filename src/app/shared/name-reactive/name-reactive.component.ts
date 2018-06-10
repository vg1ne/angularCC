import {Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-name-reactive',
  templateUrl: './name-reactive.component.html',
  styleUrls: ['./name-reactive.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NameReactiveComponent),
      multi: true
    }
  ]
})
export class NameReactiveComponent implements ControlValueAccessor, OnInit{
  @Input() disabled = false
  @Input() defaultValue: string
  @Output() onBlur = new EventEmitter<string>()
  private innerValue;

  get value(){
    return this.innerValue
  }
  set value(value: string | null){
    this.innerValue = value
  }

  ngOnInit() {
  }

  blur(){
    if(!this.value.length){
      this.writeValue(this.defaultValue)
    }
    this.onBlur.emit(this.value)
  }
  onChange = (value: string) => {};
  onTouched = () => {};
  writeValue(value: string): void {
    this.value = value
    this.onChange(value)
  }
  registerOnChange(fn: (value: string) => void): void {
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
