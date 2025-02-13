import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
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
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, './assets/language/', '.json');
}
export const appConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom(provideFirebaseApp(() => initializeApp(firebaseConfig))),
        importProvidersFrom(provideFirestore(() => getFirestore())),
        importProvidersFrom(TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        })),
    ],
};
//# sourceMappingURL=app.config.js.map