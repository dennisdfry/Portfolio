
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

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
export class FeedbackComponent implements OnInit, OnDestroy {
  /**
   * Array of feedback comments.
   */
  comments: string[] = [];

  /**
   * Array of user names corresponding to the feedback comments.
   */
  users: string[] = [];

  /**
   * The index of the currently displayed comment.
   * @default 1
   */
  public currentIndex = 1;

    /**
   * Subscription to detect language changes.
   */
    private langChangeSubscription!: Subscription;

  constructor(private translate: TranslateService) {}

  /**
   * Initializes the component and loads the feedback comments.
   */
  ngOnInit(): void {
    this.loadComments();
    this.langChangeSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadComments();
    });
  }

   /**
   * Unsubscribes from language change events to prevent memory leaks.
   */
   ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  /**
   * Loads feedback comments from the translation file.
   */
  loadComments(): void {
    this.comments = [];
    this.users = [];
    const userKeys = ['USER_1', 'USER_2', 'USER_3'];
    userKeys.forEach(userKey => {
      this.translate.get(`FEEDBACK.COMMENTS.${userKey}`).subscribe(comment => {
        this.comments.push(comment);
      });
      this.translate.get(`FEEDBACK.USERS.${userKey}`).subscribe(user => {
        this.users.push(user);
      });
    });
  }

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