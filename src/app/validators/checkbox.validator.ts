import { FormControl } from '@angular/forms';

export class CheckboxValidator {
  isFalse(control: FormControl): boolean {
    return control.value;
  }
}
