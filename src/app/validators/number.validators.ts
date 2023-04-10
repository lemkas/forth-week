import { FormControl } from '@angular/forms';

export class NumberValidator {
  isNumber(control: FormControl) {
    if (isNaN(control.value)) {
      return { errorNumber: true };
    } else {
      return null;
    }
  }
}
