import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IFeedbackForm } from 'src/app/models/feedback-form';
import { CheckboxValidator } from 'src/app/validators/checkbox.validator';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent implements OnInit {
  feedBackForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private checkboxValidator: CheckboxValidator
  ) {}

  ngOnInit(): void {
    this.initForm();
    console.log(this.feedBackForm.get('fio'));
  }

  initForm() {
    this.feedBackForm = this.fb.group({
      fio: ['', [Validators.required, Validators.min(6), Validators.max(256)]],
      email: ['', [Validators.required, Validators.email, Validators.max(256)]],
      phoneNumber: ['+7', Validators.required],
      comment: ['', Validators.max(256)],
      consent: ['', Validators.requiredTrue],
    });
  }

  openModal() {
    this.dialog.open(ModalComponent);
  }

  onSubmit() {
    if (this.feedBackForm.valid) {
      console.log(this.feedBackForm.value);
      this.openModal();
      this.feedBackForm.reset();
    } else {
      console.log('хуйня');
    }
  }
}
