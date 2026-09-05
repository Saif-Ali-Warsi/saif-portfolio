import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import portfolioData from '../../src/data/resume-data.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  data = portfolioData;
  copied = false;
  encodeURIComponent = encodeURIComponent;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        },
        { threshold: 0.15 },
      );

      const revealElements = document.querySelectorAll('.scroll-reveal');
      revealElements.forEach((el) => revealObserver.observe(el));
    }
  }

  // Track expanded state for each project card
  expandedProjects: { [key: number]: boolean } = {};

  togglePoints(index: number): void {
    this.expandedProjects[index] = !this.expandedProjects[index];
  }

  isExpanded(index: number): boolean {
    return !!this.expandedProjects[index];
  }

  copyLinkedIn(url: string) {
  const fullUrl = url.startsWith('http') ? url : 'https://' + url;
  navigator.clipboard.writeText(fullUrl).then(() => {
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  });
}

openCallPopup(event: Event, phone: string) {
  // Allows default tel: behavior on mobile, shows prompt/fallback on desktop if needed
  if (!window.matchMedia('(max-width: 768px)').matches) {
    event.preventDefault();
    alert(`Phone number: ${phone}\n(Clicking will launch your default calling application on supported devices)`);
  }
}
}
