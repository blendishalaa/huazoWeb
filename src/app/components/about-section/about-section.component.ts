import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
export class AboutSectionComponent {
  mainTitle = 'Jepu Fustaneve Një Histori të Re!';
  sectionTitle = 'Rreth Nesh – Huazo';
  
  features = [
    {
      iconType: 'dress',
      title: 'Shumëllojshmëri e Madhe',
      description: 'Zgjidh nga mijëra fustane për çdo rast'
    },
    {
      iconType: 'delivery',
      title: 'Dorëzim i Shpejtë',
      description: 'Marr fustanin tuaj në kohë rekord'
    },
    {
      iconType: 'sustainable',
      title: 'Modë e Qëndrueshme',
      description: 'Kontribuoni në mjedisin më të mirë'
    },
    {
      iconType: 'payment',
      title: 'Pagesë e Sigurt',
      description: 'Transaksione të sigurta dhe të lehta'
    },
    {
      iconType: 'quality',
      title: 'Cilësi Premium',
      description: 'Vetëm fustane të zgjedhura me kujdes'
    },
    {
      iconType: 'return',
      title: 'Kthim i Lehtë',
      description: 'Proces i thjeshtë për kthimin e fustanit'
    }
  ];
}

