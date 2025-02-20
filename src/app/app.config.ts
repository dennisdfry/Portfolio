import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export const firebaseConfig = {
  apiKey: "AIzaSyA7uh86Fyac-fXbpic-OrsTP-V_jNF6CpI",
  authDomain: "portfolio-579ba.firebaseapp.com",
  projectId: "portfolio-579ba",
  storageBucket: "portfolio-579ba.appspot.com",
  messagingSenderId: "924498261196",
  appId: "1:924498261196:web:98f87af6de8088412f3e69",
  measurementId: "G-MQ0NKPZNWH"
};

/**
 * Factory function for loading translation files.
 * 
 * @param http - The HttpClient instance used to fetch translation files.
 * @returns A new instance of TranslateHttpLoader.
 */
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/language/', '.json');
}

/**
 * Global application configuration object.
 * Provides routing, HTTP client, Firebase services, and translation module.
 */
export const appConfig: ApplicationConfig = {
  providers: [
      
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(provideFirebaseApp(() => initializeApp(firebaseConfig))),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
    importProvidersFrom(
      RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })
    ),
  ],
};