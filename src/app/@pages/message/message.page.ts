import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateMessageComponent } from '@modal/create-message/create-message.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  onAdd = async () => {
    const modal = await this.modalCtrl.create({
      component: CreateMessageComponent});
    modal.present();
  };
}
