import { Component, Input, OnInit, forwardRef } from '@angular/core';

import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { DEPARTMENTS } from 'src/app/models/feedback-form';

@Component({
  selector: 'app-dropdowm',
  templateUrl: './dropdowm.component.html',
  styleUrls: ['./dropdowm.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdowmComponent),
      multi: true,
    },
  ],
})
export class DropdowmComponent implements OnInit, ControlValueAccessor {
  @Input() options: any[] = [];
  dropdownControl = new FormControl();
  onChange(value: DEPARTMENTS): void {}

  ngOnInit(): void {
    this.dropdownControl.valueChanges.subscribe((value: DEPARTMENTS) => {
      this.onChange(value);
    });
  }

  writeValue(value: any): void {
    this.dropdownControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}
}
