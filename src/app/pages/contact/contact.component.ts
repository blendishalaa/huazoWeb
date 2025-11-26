import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactInfo = {
    email: 'info@huazo.com',
    phone: '+1 (555) 123-4567',
    address: '123 Fashion Street, Style City, SC 12345'
  };

  socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: '#' },
    { name: 'Instagram', icon: 'instagram', url: '#' },
    { name: 'Twitter', icon: 'twitter', url: '#' },
    { name: 'LinkedIn', icon: 'linkedin', url: '#' }
  ];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    // Handle form submission here
    console.log('Form submitted:', this.formData);
    this.submitted = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      this.submitted = false;
    }, 3000);
  }
}

