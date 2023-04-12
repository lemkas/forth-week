import { FormControl } from '@angular/forms';

export interface IFeedbackForm {
  fio: FormControl<string>;
  email: FormControl<string>;
  phoneNumber: FormControl<string>;
  badgeNumber: FormControl<number>;
  comment: FormControl<string>;
  consent: FormControl<boolean>;
}

export enum DEPARTMENTS {
  FINANCE_DEPARTMENT = 'Финансовый отдел',
  ACCOUNTING_DEPARTMENT = 'Бухгалтерия',
  HR_DEPARTMENT = 'Отдел кадров',
}
