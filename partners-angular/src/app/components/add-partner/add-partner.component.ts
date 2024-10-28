import { Component } from '@angular/core';
import { PartnerService } from '../../services/partner.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-partner',
  templateUrl: './add-partner.component.html',
  styleUrls: ['./add-partner.component.scss']
})
export class AddPartnerComponent {
  partner = { name: '', service: '' };

  constructor(
    private partnerService: PartnerService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  addPartner() {
    this.partnerService.addPartner(this.partner).subscribe(
      (response) => {
        this.snackBar.open('Parceiro adicionado com sucesso!', 'Fechar', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.snackBar.open('Erro ao adicionar parceiro. Tente novamente.', 'Fechar', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }
}
