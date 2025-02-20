import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private accessGranted = false;

  constructor(private router: Router) {}

  allowAccess() {
    this.accessGranted = true;
  }

  canActivate(): boolean {
    if (this.accessGranted) {
      return true;
    } else {
      this.router.navigate(['/']); 
      return false;
    }
  }
}