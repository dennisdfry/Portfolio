import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LegalNotizService {
  private visibilitySubject = new BehaviorSubject<boolean>(false);
  visibility$ = this.visibilitySubject.asObservable();

  show() {
    this.visibilitySubject.next(true);
  }

  hide() {
    this.visibilitySubject.next(false);
  }
}