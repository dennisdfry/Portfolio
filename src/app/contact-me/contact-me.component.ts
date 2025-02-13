import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})

export class ContactMeComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  privacyAccepted: boolean = false;

  constructor(private firebaseService: FirebaseService) { }

  async onSubmit() {
    if (this.privacyAccepted && this.name && this.email && this.message) {
      const formData = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      try {
        await this.firebaseService.saveMessage(formData);
        alert('Nachricht erfolgreich gesendet!');
        this.clearForm();
      } catch (error) {
        console.error('Fehler beim Senden der Nachricht:', error);
        alert('Es gab einen Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.');
      }
    } else {
      alert('Bitte alle Felder ausfüllen und die Datenschutzrichtlinie akzeptieren.');
    }
  }

  clearForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.privacyAccepted = false;
  }
}

