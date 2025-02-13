import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig } from '../../firebase.config';
let FirebaseService = class FirebaseService {
    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app);
        console.log('Firebase Service initialized');
    }
    async saveMessage(data) {
        try {
            const docRef = await addDoc(collection(this.db, 'messages'), data);
            console.log('Daten erfolgreich gespeichert mit ID:', docRef.id);
        }
        catch (error) {
            console.error('Fehler beim Speichern in Firestore:', error);
            alert('Fehler beim Speichern der Nachricht.');
        }
    }
};
FirebaseService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], FirebaseService);
export { FirebaseService };
//# sourceMappingURL=firebase.service.js.map