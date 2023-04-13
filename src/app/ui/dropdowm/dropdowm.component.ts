import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

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
  @Input() options: string[] = [];
  dropdownControl = new FormControl();
  onChange(value: string): void {}

  ngOnInit(): void {
    this.dropdownControl.valueChanges.subscribe((value: string) => {
      this.onChange(value);
    });
  }

  writeValue(value: string): void {
    this.dropdownControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {}
}
