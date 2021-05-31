import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreateContactComponent } from '@modal/create-contact/create-contact.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  segment: string;
  uid: Observable<string>;

  constructor(
    private act: ActivatedRoute,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.uid = this.act.paramMap.pipe(map(paramsMap => paramsMap.get('uid')));
    this.segment = 'todos';
  }

  loadImageFromDevice= (ev: any) => {
    const files = ev.srcElement.files[0];
    const reader = new FileReader();
    reader.readAsText(ev.target.files[0]);
    reader.onload = () => {
      const csvData = reader.result;
      console.log(csvData);
    };
  };

  segmentChanged = (ev: any) => {
    this.segment = ev.detail.value;
  };

  onAdd = async () => {
    const modal = await this.modalCtrl.create({
      component: CreateContactComponent});
    modal.present();
  };
}
