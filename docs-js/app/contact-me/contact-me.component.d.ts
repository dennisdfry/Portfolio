import { FirebaseService } from '../services/firebase.service';
export declare class ContactMeComponent {
    private firebaseService;
    name: string;
    email: string;
    message: string;
    privacyAccepted: boolean;
    constructor(firebaseService: FirebaseService);
    onSubmit(): Promise<void>;
    clearForm(): void;
}
