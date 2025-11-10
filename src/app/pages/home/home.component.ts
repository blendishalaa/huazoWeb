import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  subtitle = 'Vish. Kthe. Përsërit.';
  title = 'HUAZO';
  tagline = 'Një event, një natë magjike, një fustan i paharrueshëm – dhe pastaj?';
  dressImagePath = 'assets/images/Dress.png';
}

