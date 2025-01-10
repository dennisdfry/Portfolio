import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  comments = ['hallo', 'huhu', 'tschüss'];

  currentIndex = 1;

  prevComment(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextComment(): void {
    if (this.currentIndex < this.comments.length - 1) {
      this.currentIndex++;
    }
  }

  getCommentClass(index: number): string {
    return index === this.currentIndex ? 'comment_center' : '';
  }
}
