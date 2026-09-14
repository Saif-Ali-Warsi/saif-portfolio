import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  OnInit,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import portfolioData from '../../../data/resume-data.json';
import { GithubStatsComponent } from '../../components/github-stats/github-stats.component';
import { VisitorService } from '../../services/visitor.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GithubStatsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit, OnInit {
 data = portfolioData;
  copied = false;
  encodeURIComponent = encodeURIComponent;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private visitorService: VisitorService,
  ) {}

  ngOnInit(): void {
    this.visitorService.trackVisitor();
  }

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
      alert(
        `Phone number: ${phone}\n(Clicking will launch your default calling application on supported devices)`,
      );
    }
  }
}
