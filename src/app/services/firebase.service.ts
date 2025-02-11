import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig } from '../../firebase.config'; // Dein Firebase-Konfigurationsdatei

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private app = initializeApp(firebaseConfig); 
  private db = getFirestore(this.app); 

  constructor() {
    console.log('Firebase Service initialized');
  }

  async saveMessage(data: { name: string; email: string; message: string }) {
    try {
      const docRef = await addDoc(collection(this.db, 'messages'), data);
      console.log('Daten erfolgreich gespeichert mit ID:', docRef.id);
    } catch (error) {
      console.error('Fehler beim Speichern in Firestore:', error);
      alert('Fehler beim Speichern der Nachricht.');
    }
  }
}