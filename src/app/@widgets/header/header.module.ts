import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  entryComponents: [HeaderComponent],
  imports: [
    IonicModule,
    CommonModule,
  ]
})
export class HeaderModule { }
