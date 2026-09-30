import { Component } from '@angular/core';
import portfolioData from '../../../data/resume-data.json';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  data = portfolioData;

  openCallPopup(event: Event, phone: string) {
    // Allows default tel: behavior on mobile, shows prompt/fallback on desktop if needed
    if (!window.matchMedia('(max-width: 768px)').matches) {
      event.preventDefault();
      alert(
        `Phone number: ${phone}\n(Clicking will launch your default calling application on supported devices)`,
      );
    }
  }
}
