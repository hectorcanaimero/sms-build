import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService } from '@core/services/data.service';
import { Storage } from '@capacitor/storage';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  uid: any;
  list$: Observable<any[]>;

  constructor(
    private router: Router,
    private db: DataService,
    private alertCtrl: AlertController
  ) { }

  async ngOnInit() {
    const uid = await (await Storage.get({ key: 'uid' })).value;
    this.uid = uid.split('"').join('');
    this.onGetCategories(this.uid);
  }

  onGetCategories = (uid: string) => {
    this.list$ = this.db.getCategories(uid);
  };

  onCreateCategory = async () => {
    const alert = await this.alertCtrl.create({
      inputs: [
        { name: 'category', type: 'text', placeholder: 'Categoria' },
      ],
      buttons: [
        { text: 'Cancel', role: 'cancel', handler: () => { } },
        { text: 'Ok', handler: ({ category }) => this.onAdd(category) }
      ]
    });
    alert.present();
  };

  onContact = (uid: string) => this.router.navigateByUrl(`/pages/contact/${uid}`);

  onAdd = (item: any) => {
    this.db.createCategory(this.uid, item);
    this.alertCtrl.dismiss();
  };
}
