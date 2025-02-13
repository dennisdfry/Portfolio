import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig } from '../../firebase.config'; 

/**
 * Service for interacting with Firebase Firestore.
 * This service initializes the Firebase app and provides a method to store messages in Firestore.
 */
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  /**
   * Initializes the Firebase app with the provided configuration.
   */
  private app = initializeApp(firebaseConfig);

  /**
   * Creates an instance of Firestore database.
   */
  private db = getFirestore(this.app);

  /**
   * Constructor for FirebaseService.
   * Logs a message to the console when the service is initialized.
   */
  constructor() {
    console.log('Firebase Service initialized');
  }

  /**
   * Saves a message to the Firestore database.
   * 
   * @param data - An object containing `name`, `email`, and `message` fields to be stored in the database.
   * @returns A Promise that resolves to the document reference or logs an error message if the operation fails.
   */
  async saveMessage(data: { name: string; email: string; message: string }): Promise<void> {
    try {
      const docRef = await addDoc(collection(this.db, 'messages'), data);
      console.log('Data successfully saved with ID:', docRef.id);
    } catch (error) {
      console.error('Error saving to Firestore:', error);
      alert('Error saving the message.');
    }
  }
}
