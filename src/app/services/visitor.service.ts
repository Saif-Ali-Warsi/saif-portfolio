import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  private apiUrl = 'https://portfolio-user-counter.onrender.com/api';

  constructor(private http: HttpClient) {}

  trackVisitor(): void {
    let visitorId = localStorage.getItem('portfolio_visitor_id');

    if (!visitorId) {
      visitorId = crypto.randomUUID();

      localStorage.setItem(
        'portfolio_visitor_id',
        visitorId
      );
    }

    this.http.post(`${this.apiUrl}/track`, {
      visitorId
    }).subscribe({
      next: (response) => {
        console.log('Visitor tracked:', response);
      },
      error: (error) => {
        console.error('Visitor tracking failed:', error);
      }
    });
  }
}