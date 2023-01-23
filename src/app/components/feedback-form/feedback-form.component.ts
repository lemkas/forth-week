import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent implements OnInit {
  feedBackForm!: FormGroup;
  showModal: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.feedBackForm = this.fb.group({
      fio: ['', [Validators.required, Validators.min(6), Validators.max(256)]],
      email: ['', [Validators.required, Validators.email, Validators.max(256)]],
      phoneNumber: ['+7', Validators.required],
      comment: ['', Validators.max(256)],
      consent: [false, Validators.required],
    });
  }

  onSubmit() {
    if (this.feedBackForm.valid) {
      console.log(this.feedBackForm.value);
    } else {
      console.log('хуйня');
    }
  }
}
