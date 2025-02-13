import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Service to manage the visibility of the legal notice (Impressum).
 * Uses a BehaviorSubject to track the visibility state and provide an observable.
 */
export class LegalNotizService {
  
  /**
   * BehaviorSubject to store the visibility state of the legal notice.
   * Initially set to `false` (hidden).
   */
  private visibilitySubject = new BehaviorSubject<boolean>(false);

  /**
   * Observable that emits the current visibility state of the legal notice.
   */
  visibility$ = this.visibilitySubject.asObservable();

  /**
   * Shows the legal notice by setting the visibility state to `true`.
   */
  show(): void {
    this.visibilitySubject.next(true);
  }

  /**
   * Hides the legal notice by setting the visibility state to `false`.
   */
  hide(): void {
    this.visibilitySubject.next(false);
  }
}
