import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Component to display and navigate through a list of feedback comments.
 */
@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  /**
   * Array of feedback comments.
   */
  comments = [
    'Dennis, your creative approach and attention to detail have greatly advanced the project. Working with you has been truly rewarding!',
    'Your ability to simplify complex problems is remarkable.',
    'Thank you for being such a supportive colleague!'
  ];

  /**
   * Array of user names corresponding to the feedback comments.
   */
  user = ['Peter Pfautsch', 'Benjamin Kloss', 'Lisa Meier'];

  /**
   * The index of the currently displayed comment.
   * @default 1
   */
  public currentIndex = 1;

  /**
   * Moves to the previous comment in the list, if possible.
   */
  prevComment() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  /**
   * Moves to the next comment in the list, if possible.
   */
  nextComment() {
    if (this.currentIndex < this.comments.length - 1) {
      this.currentIndex++;
    }
  }

  /**
   * Scrolls to the specific comment index.
   * @param index The index of the comment to scroll to.
   */
  scrollToIndex(index: number) {
    this.currentIndex = index;
  }

  /**
   * Determines the CSS class to apply based on the current index of the comment.
   * @param index The index of the comment to evaluate.
   * @returns A string representing the CSS class for the comment.
   */
  getCommentClass(index: number): string {
    if (index === this.currentIndex) return 'active';
    if (index < this.currentIndex) return 'left';
    if (index > this.currentIndex) return 'right';
    return '';
  }
}