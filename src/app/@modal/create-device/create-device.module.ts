import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDeviceComponent } from './create-device.component';


@NgModule({
  declarations: [CreateDeviceComponent],
  exports: [CreateDeviceComponent],
  entryComponents: [CreateDeviceComponent],
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class CreateDeviceModule { }
