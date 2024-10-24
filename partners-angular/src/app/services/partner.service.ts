import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  private apiUrl = 'https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners';

  constructor(private http: HttpClient) {}

  getPartners(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPartner(partner: any): Observable<any> {
    return this.http.post(this.apiUrl, partner);
  }

  updatePartner(id: string, partner: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, partner);
  }

  deletePartner(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
