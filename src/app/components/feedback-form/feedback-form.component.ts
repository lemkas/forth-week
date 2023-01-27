import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IFeedbackForm } from 'src/app/models/feedback-form';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent implements OnInit {
  feedBackForm!: FormGroup<IFeedbackForm>;
  isValidFields: boolean = false;
  private subscription!: Subscription;
  showForm: boolean = true;
  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.initForm();
    this.checkValid();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  initForm(): void {
    this.feedBackForm = this.fb.nonNullable.group({
      fio: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(256),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(256)],
      ],
      phoneNumber: ['+7', Validators.required],
      comment: ['', Validators.maxLength(256)],
      consent: [false, Validators.requiredTrue],
    });
  }

  checkValid(): void {
    this.subscription = this.feedBackForm.valueChanges.subscribe(() => {
      const fio = this.feedBackForm.get('fio');
      const email = this.feedBackForm.get('email');
      const phoneNumber = this.feedBackForm.get('phoneNumber');

      if (fio?.valid && email?.valid && phoneNumber?.valid) {
        // почему тут фио возможно null
        this.isValidFields = true;
      } else {
        this.isValidFields = false;
      }
    });
  }

  preparePhone() {
    const code = '+7';
    const phoneNumberControl = this.feedBackForm.get('phoneNumber');
    phoneNumberControl?.setValue(code + phoneNumberControl.value);
  }

  openModal(): void {
    this.dialog.open(ModalComponent);
  }

  onSubmit(): void {
    if (this.feedBackForm.valid) {
      this.preparePhone();
      console.log(this.feedBackForm.value);
      this.showForm = false;
      setTimeout(() => {
        this.feedBackForm.reset();
        this.showForm = true;
      });
      this.openModal();
    } else {
      console.log('не норм');
    }
  }
}
