import { FormControl } from '@angular/forms';

export interface IFeedbackForm {
  fio: FormControl<string>;
  email: FormControl<string>;
  phoneNumber: FormControl<string>;
  comment: FormControl<string>;
  consent: FormControl<boolean>;
}
