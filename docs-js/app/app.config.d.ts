import { ApplicationConfig } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
export declare const firebaseConfig: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
};
export declare function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader;
export declare const appConfig: ApplicationConfig;
