import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"dennis-freyer","appId":"1:346204051209:web:d001c7af30b90ab96025d8","storageBucket":"dennis-freyer.firebasestorage.app","apiKey":"AIzaSyApoJqRrPYiIz5Qp3gLbhqhdiUA2dGjfzM","authDomain":"dennis-freyer.firebaseapp.com","messagingSenderId":"346204051209"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
