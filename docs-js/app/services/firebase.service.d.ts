export declare class FirebaseService {
    private app;
    private db;
    constructor();
    saveMessage(data: {
        name: string;
        email: string;
        message: string;
    }): Promise<void>;
}
