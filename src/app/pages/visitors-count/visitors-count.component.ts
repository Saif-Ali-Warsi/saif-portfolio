import { Component } from '@angular/core';
import { VisitorStatsService, VisitorStats } from '../../services/visitor-stats.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-visitors-count',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './visitors-count.component.html',
  styleUrl: './visitors-count.component.scss'
})
export class VisitorsCountComponent {

  adminKey = '';

  stats: VisitorStats | null = null;

  loading = false;
  error = '';

  constructor(
    private visitorStatsService: VisitorStatsService
  ) {}

  loadStats(): void {

    if (!this.adminKey.trim()) {
      this.error = 'Please enter your admin key.';
      return;
    }

    this.loading = true;
    this.error = '';

    this.visitorStatsService
      .getStats(this.adminKey)
      .subscribe({
        next: (response) => {
          this.stats = response;
          this.loading = false;
        },

        error: (error) => {
          this.loading = false;

          if (error.status === 401) {
            this.error = 'Invalid admin key.';
          } else {
            this.error = 'Unable to load visitor statistics.';
          }
        }
      });
  }
}