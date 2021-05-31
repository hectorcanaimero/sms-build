import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateMessageComponent } from './create-message.component';

@NgModule({
  exports: [CreateMessageComponent],
  declarations: [CreateMessageComponent],
  entryComponents: [CreateMessageComponent],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class CreateMessageModule { }
