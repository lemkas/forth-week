import { FormControl } from '@angular/forms';

export interface IFeedbackForm {
  fio: FormControl<string>;
  email: FormControl<string>;
  phoneNumber: FormControl<string>;
  badgeNumber: FormControl<number>;
  comment: FormControl<string>;
  consent: FormControl<boolean>;
}
