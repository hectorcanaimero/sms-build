import { DataService } from '@core/services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss'],
})

export class CreateMessageComponent implements OnInit {

  count: string;
  value = 0;
  uid: string;
  message: FormGroup;
  categories$: Observable<any[]>;

  constructor(
    private fb: FormBuilder,
    private db: DataService,
    private modalCtrl: ModalController,
  ) { }

  async ngOnInit() {
    const uid = (await Storage.get({ key: 'uid' })).value;
    this.uid = uid.split('"').join('');
    this.load();
    this.categories$ = this.db.getCategories(this.uid);
  }

  onSubmit = () => {
    console.log('object');
  };

  load = () => {
    this.message = this.fb.group({
      dia: ['', Validators.required],
      hora: ['', Validators.required],
      device: ['', Validators.required],
      category: ['', Validators.required],
      text: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(160)]],
    });
  };

  countValue = (ev: any) => {
    const count = (ev.detail.value);
    this.value = count.length;
  };

  onClose = () => this.modalCtrl.dismiss();
}
