import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private afa: AngularFireAuth
  ) { }

  signIn =  async ({ email, password}) => {
    await this.afa.signInWithEmailAndPassword(email, password)
      .then((res) => {
        Storage.set({ key: 'uid', value: JSON.stringify(res.user.uid) });
        this.router.navigateByUrl('/pages/home');
      }).catch((err) => {
        console.log('🚀 ~ file: auth.service.ts ~ line 24 ~ AuthService ~ .then ~ err', err);
      });
  };

  signOut = async () => {
    await Storage.remove({ key: 'uid' });
    this.afa.signOut();
    this.router.navigateByUrl('/login');
  };
}
