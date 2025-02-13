import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
let FeedbackComponent = class FeedbackComponent {
    constructor() {
        this.comments = [
            'Dennis, your creative approach and attention to detail have greatly advanced the project. Working with you has been truly rewarding!',
            'Your ability to simplify complex problems is remarkable.',
            'Thank you for being such a supportive colleague!'
        ];
        this.user = ['Peter Pfautsch', 'Benjamin Kloss', 'Lisa Meier'];
        this.currentIndex = 1;
    }
    prevComment() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }
    nextComment() {
        if (this.currentIndex < this.comments.length - 1) {
            this.currentIndex++;
        }
    }
    scrollToIndex(index) {
        this.currentIndex = index;
    }
    getCommentClass(index) {
        if (index === this.currentIndex)
            return 'active';
        if (index < this.currentIndex)
            return 'left';
        if (index > this.currentIndex)
            return 'right';
        return '';
    }
};
FeedbackComponent = __decorate([
    Component({
        selector: 'app-feedback',
        standalone: true,
        imports: [CommonModule, TranslateModule],
        templateUrl: './feedback.component.html',
        styleUrl: './feedback.component.scss'
    })
], FeedbackComponent);
export { FeedbackComponent };
//# sourceMappingURL=feedback.component.js.map