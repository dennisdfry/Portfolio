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
  comments = ['Dennis, your creative approach and attention to detail have greatly advanced the project. Working with you has been truly rewarding!', 'huhu'];
  user = ['Peter Pfautsch', 'Benjamin Kloss'];
  currentIndex = 0;

  prevComment(): void {
    if (this.currentIndex === 0) {
      this.currentIndex = this.comments.length - 1; 
    } else {
      this.currentIndex--;
    }
  }

nextComment(): void {
  if (this.currentIndex === this.comments.length - 1) {
    this.currentIndex = 0; 
  } else {
    this.currentIndex++;
  }
}

scrollToIndex(index: number): void {
  this.currentIndex = index;
}

getCommentClass(index: number): string {
  return index === this.currentIndex ? 'comment_center' : '';
}



getTransform(): string {
  return `translateX(-${this.currentIndex * 100}%)`;
}
}