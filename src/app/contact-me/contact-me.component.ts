
import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

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
  styleUrl: './contact-me.component.scss'
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
   * Initializes the FirebaseService instance.
   * 
   * @param {FirebaseService} firebaseService - The service for interacting with Firebase.
   */
  constructor(private firebaseService: FirebaseService, private router: Router) { }


  navigateToLegalNotiz() {
    this.router.navigate(['/legal-notiz']);
  }
  /**
   * Called when the form is submitted.
   * Checks if all fields are filled out and the privacy policy is accepted.
   * If so, it saves the message in the Firebase service.
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
        await this.firebaseService.saveMessage(formData);
        this.clearForm();
      } catch (error) {
        console.error('Error sending the message:', error);
      }
    } else {
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
