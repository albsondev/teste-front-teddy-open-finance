import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PartnerService } from '../../services/partner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  clearCookies(clearCookies: any) {
    throw new Error('Method not implemented.');
  }
  partners: any[] = [];

  constructor(
    private partnerService: PartnerService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadPartners();
  }

  loadPartners(): void {
    this.partnerService.getPartners().subscribe({
      next: (data) => this.partners = data,
      error: (err) => this.showError('Erro ao carregar parceiros.')
    });
  }

  deletePartner(id: string): void {
    this.partnerService.deletePartner(id).subscribe({
      next: () => {
        this.partners = this.partners.filter(p => p.id !== id);
        this.showSuccess('Parceiro deletado com sucesso!');
      },
      error: () => this.showError('Erro ao deletar parceiro.')
    });
  }

  editPartner(id: string): void {
    this.router.navigate(['/edit-partner', id]);
  }

  showSuccess(message: string): void {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }

  showError(message: string): void {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000,
      panelClass: ['mat-toolbar', 'mat-warn']
    });
  }

  logout(): void {
    localStorage.removeItem('username');
    document.cookie = 'username=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    this.router.navigate(['/login']);
  }
}
