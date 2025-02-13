export declare class FeedbackComponent {
    comments: string[];
    user: string[];
    currentIndex: number;
    prevComment(): void;
    nextComment(): void;
    scrollToIndex(index: number): void;
    getCommentClass(index: number): string;
}
