import {
  Component,
  ElementRef,
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
  private onChange(value: string): void {}
  private onTouched!: () => void;
  dropdownControl = new FormControl();

  constructor(private readonly elementRef: ElementRef) {}

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
