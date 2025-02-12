import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  comments = [
    'Dennis, your creative approach and attention to detail have greatly advanced the project. Working with you has been truly rewarding!',
    'Your ability to simplify complex problems is remarkable.',
    'Thank you for being such a supportive colleague!'
  ];
  user = ['Peter Pfautsch', 'Benjamin Kloss', 'Lisa Meier'];
  public currentIndex = 1;

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

  scrollToIndex(index: number) {
    this.currentIndex = index;
  }

  getCommentClass(index: number): string {
    if (index === this.currentIndex) return 'active';
    if (index < this.currentIndex) return 'left';
    if (index > this.currentIndex) return 'right';
    return '';
  }
}

