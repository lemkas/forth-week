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
  feedBackForm!: FormGroup;
  isValidFields: boolean = false;
  subscription!: Subscription;
  showForm: boolean = true;
  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.initForm();
    this.checkValid();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  initForm() {
    this.feedBackForm = this.fb.group({
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

  checkValid() {
    this.subscription = this.feedBackForm.valueChanges.subscribe((data) => {
      const fio = this.feedBackForm.get('fio');
      const email = this.feedBackForm.get('email');
      const phoneNumber = this.feedBackForm.get('phoneNumber');

      if (fio?.valid && email?.valid && phoneNumber?.valid) {
        this.isValidFields = true;
        console.log(this.isValidFields);
      } else {
        this.isValidFields = false;
        console.log(this.isValidFields);
      }
    });
  }
  //получить массив имен невалидных контроллов и распихать их по спанам под
  openModal() {
    this.dialog.open(ModalComponent);
  }

  onSubmit() {
    if (this.feedBackForm.valid) {
      console.log(this.feedBackForm.value);
      this.showForm = false;
      setTimeout(() => {
        this.feedBackForm.reset();
        this.showForm = true;
      });
      this.openModal();
    } else {
      console.log('хуйня');
    }
  }
}
