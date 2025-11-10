import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  companyLinks = [
    { label: 'Blog', path: '/blog' },
    { label: 'Careers', path: '/careers' },
    { label: 'Pricing', path: '/pricing' }
  ];
  
  resourcesLinks = [
    { label: 'Documentation', path: '/documentation' },
    { label: 'Papers', path: '/papers' },
    { label: 'Press Conferences', path: '/press' }
  ];
  
  legalLinks = [
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Cookies Policy', path: '/cookies' },
    { label: 'Data Processing', path: '/data-processing' }
  ];
  
  socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: '#' },
    { name: 'YouTube', icon: 'youtube', url: '#' },
    { name: 'LinkedIn', icon: 'linkedin', url: '#' }
  ];
}

