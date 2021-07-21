import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { Global } from '../../../global';

@Component({
  selector: 'ng-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})
export class InputTextComponent implements OnInit, ControlValueAccessor {

  constructor() {
    this.ngControl = Global.Injector.get(NgControl, null);
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  @Input() value: any;
  @Input() label: string;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() keyFilter: RegExp | string = /.*/g;

  ngControl: NgControl;

  onModelChange: any = (_: any) => {
  };

  onModelTouched: any = () => {
  };

  ngOnInit() {
  }

  _onChange(event) {
    const inputElement = event.target;
    this.onModelChange(inputElement.value);
  }

  _onInput(event) {
    const inputElement = event.target;
    this.onModelChange(inputElement.value);
  }

  _onBlur() {
    this.onModelTouched();
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
}
