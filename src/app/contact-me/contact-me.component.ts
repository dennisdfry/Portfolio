import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { EmailService } from '../services/email.service'; // Importiere den neuen EmailService

/**
 * Component for the contact form.
 * 
 * This component allows users to leave a message, which is sent to the Firebase service.
 * It also checks if the user has accepted the privacy policy.
 */
@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  /**
   * The sender's name.
   * @type {string}
   */
  name: string = '';

  /**
   * The sender's email address.
   * @type {string}
   */
  email: string = '';

  /**
   * The message the sender wants to send.
   * @type {string}
   */
  message: string = '';

  /**
   * Determines whether the user has accepted the privacy policy.
   * @type {boolean}
   */
  privacyAccepted: boolean = false;

  /**
   * Constructor for the ContactMeComponent.
   * Initializes the FirebaseService and EmailService instances.
   * 
   * @param {FirebaseService} firebaseService - The service for interacting with Firebase.
   * @param {EmailService} emailService - The service for sending emails.
   * @param {Router} router - The Angular router for navigation.
   */
  constructor(
    private firebaseService: FirebaseService,
    private emailService: EmailService,
    private router: Router,
  ) {}

  /**
   * Navigates to the legal notice page.
   */
  navigateToLegalNotiz() {
    this.router.navigate(['/legal-notiz']);
  }

  /**
   * Called when the form is submitted.
   * Checks if all fields are filled out and the privacy policy is accepted.
   * If so, it saves the message in the Firebase service and sends an email.
   * 
   * @param {NgForm} form - The form instance.
   * @returns {Promise<void>} Returns a Promise indicating the success or failure of saving the message.
   */
  async onSubmit(form: NgForm) {
    if (form.valid && this.privacyAccepted) {
      const formData = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      try {
        // Speichere die Nachricht in Firebase
        await this.firebaseService.saveMessage(formData);

        // Sende die E-Mail über EmailJS
        await this.emailService.sendEmail(formData);
        console.log('E-Mail erfolgreich versendet');

        // Formular zurücksetzen
        this.clearForm();
      } catch (error) {
        console.error('Fehler beim Versenden der E-Mail:', error);
      }
    }
  }

  /**
   * Clears all form data and resets privacy settings.
   * 
   * @returns {void}
   */
  clearForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.privacyAccepted = false;
  }
}