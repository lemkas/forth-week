import { Injectable } from '@angular/core';
import { DEPARTMENTS } from '../models/feedback-form';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  public departments: DEPARTMENTS[] = [
    DEPARTMENTS.ACCOUNTING_DEPARTMENT,
    DEPARTMENTS.FINANCE_DEPARTMENT,
    DEPARTMENTS.HR_DEPARTMENT,
  ];
  constructor() {}
}
