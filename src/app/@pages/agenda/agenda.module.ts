import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AgendaPage } from './agenda.page';
import { HeaderModule } from '@widgets/header/header.module';
import { AgendaPageRoutingModule } from './agenda-routing.module';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    HeaderModule,
    CommonModule,
    RouterModule,
    AgendaPageRoutingModule
  ],
  declarations: [AgendaPage]
})
export class AgendaPageModule {}
