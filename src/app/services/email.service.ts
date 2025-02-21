import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private serviceID = 'service_06gmuk7';
  private templateID = 'template_aq7hqd5';
  private userID = 'h7J_27girzsRN2uvZ';

  constructor() {
    emailjs.init(this.userID); // Initialisiere EmailJS
  }

  sendEmail(formData: { name: string; email: string; message: string }): Promise<any> {
    return emailjs.send(this.serviceID, this.templateID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    });
  }
}