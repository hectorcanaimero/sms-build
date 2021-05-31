import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';
import { CreateContactModule } from '@modal/create-contact/create-contact.module';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    CreateContactModule,
    ContactPageRoutingModule,
  ],
  declarations: [ContactPage]
})
export class ContactPageModule {}
