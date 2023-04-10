import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { NumberValidator } from 'src/app/validators/number.validators';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent implements OnInit {
  feedBackForm!: FormGroup;
  isValidFields: boolean = false;
  showForm: boolean = true;
  isNumberError: boolean = false;
  private invalidControls: Array<string> = [];
  private subscription!: Subscription;
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private validator: NumberValidator
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.checkValidSubscription();
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
      badgeNumber: [null, [this.validator.isNumber]],
      comment: ['', Validators.maxLength(256)],
      consent: [false, Validators.requiredTrue],
    });
  }

  private checkValidSubscription(): void {
    this.subscription = this.feedBackForm.valueChanges.subscribe(() => {
      const fio = this.feedBackForm.get('fio');
      const email = this.feedBackForm.get('email');
      const phoneNumber = this.feedBackForm.get('phoneNumber');
      const badgeNumber = this.feedBackForm.get('badgeNumber');

      if (badgeNumber?.invalid) {
        this.isNumberError = true;
      } else {
        this.isNumberError = false;
      }

      if (fio?.valid && email?.valid && phoneNumber?.valid) {
        // почему тут фио возможно null
        this.isValidFields = true;
      } else {
        this.isValidFields = false;
      }
    });
  }

  showInvalidMessages(controlName: string): boolean {
    return this.invalidControls.indexOf(controlName) === -1 ? false : true;
  }

  private preparePhone(): void {
    const code: string = '+7';
    const phoneNumberControl = this.feedBackForm.get('phoneNumber');
    phoneNumberControl?.setValue(code + phoneNumberControl.value);
  }

  private openModal(): void {
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
