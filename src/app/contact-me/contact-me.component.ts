
import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  privacyAccepted: boolean = false;
  showSuccessMessage: boolean = false;

  constructor(
    private firebaseService: FirebaseService,
    private emailService: EmailService,
    private router: Router,
  ) {}

  navigateToLegalNotiz() {
    this.router.navigate(['/legal-notiz']);
  }

  async onSubmit(form: NgForm) {
    if (form.valid && this.privacyAccepted) {
      const formData = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      this.showSuccessMessage = true; 
      setTimeout(() => {
        this.showSuccessMessage = false; 
      }, 3000);

      try {
        await this.firebaseService.saveMessage(formData);
        await this.emailService.sendEmail(formData);
        this.clearForm(form);
      } catch (error) {
      }
    }
  }

  clearForm(form: NgForm) {
    this.name = '';
    this.email = '';
    this.message = '';
    this.privacyAccepted = false;
    form.resetForm();
  }
}