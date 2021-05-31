import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicesPage } from './devices.page';
import { HeaderModule } from '@widgets/header/header.module';
import { DevicesPageRoutingModule } from './devices-routing.module';
import { CreateDeviceModule } from '@modal/create-device/create-device.module';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    HeaderModule,
    CommonModule,
    CreateDeviceModule,
    DevicesPageRoutingModule
  ],
  declarations: [DevicesPage]
})
export class DevicesPageModule {}
