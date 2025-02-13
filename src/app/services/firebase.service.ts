import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig } from '../../firebase.config'; 

/**
 * Service zur Interaktion mit Firebase Firestore.
 * Dieser Service initialisiert die Firebase-App und stellt eine Methode zum Speichern von Nachrichten bereit.
 */
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  /**
   * Initialisiert die Firebase-App mit der gegebenen Konfiguration.
   */
  private app = initializeApp(firebaseConfig);

  /**
   * Erstellt eine Firestore-Datenbankinstanz.
   */
  private db = getFirestore(this.app);

  /**
   * Konstruktor für den FirebaseService.
   * Gibt eine Konsole-Ausgabe aus, wenn der Service initialisiert wurde.
   */
  constructor() {
    console.log('Firebase Service initialized');
  }

  /**
   * Speichert eine Nachricht in der Firestore-Datenbank.
   * 
   * @param data - Ein Objekt mit den Feldern `name`, `email` und `message`, die in der Datenbank gespeichert werden sollen.
   * @returns Eine Promise, die entweder die Dokumentreferenz oder eine Fehlermeldung zurückgibt.
   */
  async saveMessage(data: { name: string; email: string; message: string }): Promise<void> {
    try {
      const docRef = await addDoc(collection(this.db, 'messages'), data);
      console.log('Daten erfolgreich gespeichert mit ID:', docRef.id);
    } catch (error) {
      console.error('Fehler beim Speichern in Firestore:', error);
      alert('Fehler beim Speichern der Nachricht.');
    }
  }
}