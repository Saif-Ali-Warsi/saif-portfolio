import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Visitor {
  id: number;
  visitor_id: string;
  ip_address: string;
  device_type: string;
  browser: string;
  os: string;
  first_visit: string;
  last_visit: string;
  visit_count: number;
}

export interface VisitorStats {
  totalUniqueUsers: number;
  byDevice: {
    desktop?: number;
    mobile?: number;
    tablet?: number;
  };
  visitors: Visitor[];
}

@Injectable({
  providedIn: 'root'
})
export class VisitorStatsService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getStats(adminKey: string): Observable<VisitorStats> {

    const headers = new HttpHeaders({
      'x-admin-key': adminKey
    });

    return this.http.get<VisitorStats>(
      `${this.apiUrl}/stats`,
      { headers }
    );
  }
}