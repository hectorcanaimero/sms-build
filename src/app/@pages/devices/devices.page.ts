import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateDeviceComponent } from '@modal/create-device/create-device.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})
export class DevicesPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  onCreateDevice = async () => {
    const modal = await this.modalCtrl.create({
      component: CreateDeviceComponent
    });
    modal.present();
  };

}
