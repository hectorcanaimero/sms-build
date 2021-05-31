import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private afs: AngularFirestore ) { }

  createCategory = (uid: any, data: string) => this.afs.collection('users').doc(uid)
    .collection('category').add({ name: data });

  getCategories = (uid: any) => this.afs.collection('users').doc(uid)
    .collection('category').valueChanges({idField: 'id'});

  getCategoryId = (user: string, uid: string) => this.afs.collection('users').doc(user)
  .collection('category').doc(uid).valueChanges();
}
