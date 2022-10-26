import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  addPersonal(personal: any): Promise<any> {
    return this.firestore.collection('personal').add(personal);
  }

  getPersonalTabla(): Observable<any> {
    return this.firestore.collection('personal').snapshotChanges();
  }

  deletePersonal(id: string): Promise<any> {
    return this.firestore.collection('personal').doc(id).delete();
  }

  getPersonal(id: string): Observable<any> {
    return this.firestore.collection('personal').doc(id).snapshotChanges();
  }

  updatePersonal(id: string, personal:any): Promise<any> {
    return this.firestore.collection('personal').doc(id).update(personal);
  }

}
