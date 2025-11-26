import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  mission = {
    title: 'Our Mission',
    description: 'To revolutionize the way people think about fashion by making clothing rental accessible, sustainable, and affordable for everyone. We believe that everyone deserves to look great without the environmental and financial cost of fast fashion.'
  };

  vision = {
    title: 'Our Vision',
    description: 'To create a world where fashion is circular, sustainable, and accessible. We envision a future where renting clothes is as common as buying them, reducing waste and making high-quality fashion available to everyone.'
  };

  values = [
    {
      title: 'Sustainability',
      description: 'We are committed to reducing fashion waste and promoting a circular economy. Every rental extends the life of clothing and reduces environmental impact.'
    },
    {
      title: 'Accessibility',
      description: 'Fashion should be accessible to everyone. We provide affordable rental options that allow people to express their style without breaking the bank.'
    },
    {
      title: 'Community',
      description: 'We build connections between people who share a passion for fashion. Our platform brings together renters and owners in a supportive community.'
    },
    {
      title: 'Quality',
      description: 'We ensure all items on our platform meet high quality standards. Your satisfaction and safety are our top priorities.'
    }
  ];

  story = {
    title: 'Our Story',
    paragraphs: [
      'Huazo was born from a simple observation: our closets are full of clothes we rarely wear, while others struggle to find affordable fashion options. We saw an opportunity to connect these two groups and create value for everyone.',
      'Founded in 2024, Huazo started as a small platform connecting local fashion enthusiasts. Today, we have grown into a comprehensive rental marketplace serving thousands of users who share our vision of sustainable fashion.',
      'Our team is passionate about making fashion more sustainable and accessible. We work tirelessly to improve our platform, expand our community, and make renting clothes as easy and enjoyable as possible.'
    ]
  };
}

