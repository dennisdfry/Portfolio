import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyA7uh86Fyac-fXbpic-OrsTP-V_jNF6CpI",
  authDomain: "portfolio-579ba.firebaseapp.com",
  databaseURL: "https://portfolio-579ba-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-579ba",
  storageBucket: "portfolio-579ba.firebasestorage.app",
  messagingSenderId: "924498261196",
  appId: "1:924498261196:web:98f87af6de8088412f3e69",
  measurementId: "G-MQ0NKPZNWH"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(provideFirebaseApp(() => initializeApp(firebaseConfig))),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};