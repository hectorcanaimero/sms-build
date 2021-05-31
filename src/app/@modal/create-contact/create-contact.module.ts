import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateContactComponent } from './create-contact.component';

@NgModule({
  exports: [CreateContactComponent],
  declarations: [CreateContactComponent],
  entryComponents: [CreateContactComponent],
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class CreateContactModule { }
