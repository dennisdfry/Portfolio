import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
let ContactMeComponent = class ContactMeComponent {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
        this.name = '';
        this.email = '';
        this.message = '';
        this.privacyAccepted = false;
    }
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
            }
            catch (error) {
                console.error('Fehler beim Senden der Nachricht:', error);
                alert('Es gab einen Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.');
            }
        }
        else {
            alert('Bitte alle Felder ausfüllen und die Datenschutzrichtlinie akzeptieren.');
        }
    }
    clearForm() {
        this.name = '';
        this.email = '';
        this.message = '';
        this.privacyAccepted = false;
    }
};
ContactMeComponent = __decorate([
    Component({
        selector: 'app-contact-me',
        standalone: true,
        imports: [CommonModule, FormsModule, TranslateModule],
        templateUrl: './contact-me.component.html',
        styleUrl: './contact-me.component.scss'
    })
], ContactMeComponent);
export { ContactMeComponent };
//# sourceMappingURL=contact-me.component.js.map