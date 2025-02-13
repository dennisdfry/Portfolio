import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseApp = initializeApp(firebaseConfig);
//# sourceMappingURL=firebase.config.js.map