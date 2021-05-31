import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagePage } from './message.page';
import { HeaderModule } from '@widgets/header/header.module';
import { MessagePageRoutingModule } from './message-routing.module';
import { CreateMessageModule } from '@modal/create-message/create-message.module';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    HeaderModule,
    CommonModule,
    CreateMessageModule,
    MessagePageRoutingModule
  ],
  declarations: [MessagePage]
})
export class MessagePageModule {}
