import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  forwardRef,
} from '@angular/core';
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
  @Input() disabled: boolean = false;
  private element!: HTMLElement;
  dropdownControl = new FormControl();
  onChange(value: string): void {}
  onTouched(value: string): void {}

  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: HTMLDocument
  ) {}

  ngOnInit(): void {
    this.element = this.elementRef.nativeElement as HTMLElement;
    this.isDisabled();
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

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private isDisabled(): void {
    if (this.disabled) {
      this.element.style.pointerEvents = 'none';
      this.element.style.opacity = '0.5';
    }
  }
}
