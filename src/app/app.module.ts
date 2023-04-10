import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { ModalComponent } from './components/modal/modal.component';
import { CheckboxValidator } from './validators/checkbox.validator';
import { DropdowmComponent } from './ui/dropdowm/dropdowm.component';
import { NumberValidator } from './validators/number.validators';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackFormComponent,
    ModalComponent,
    DropdowmComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [CheckboxValidator, NumberValidator],
  bootstrap: [AppComponent],
})
export class AppModule {}
