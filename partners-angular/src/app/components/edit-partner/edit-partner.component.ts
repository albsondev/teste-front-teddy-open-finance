import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartnerService } from '../../services/partner.service'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-partner',
  templateUrl: './edit-partner.component.html',
  styleUrls: ['./edit-partner.component.scss']
})
export class EditPartnerComponent implements OnInit {
  partner: any = {};

  constructor(
    private route: ActivatedRoute,
    private partnerService: PartnerService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.partnerService.getPartners().subscribe(partners => {
        this.partner = partners.find(p => p.id === id);
      });
    }
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.partnerService.updatePartner(id, this.partner).subscribe({
        next: () => {
          this.snackBar.open('Parceiro atualizado com sucesso!', 'Fechar', { duration: 3000 });
          this.router.navigate(['/dashboard']);
        },
        error: () => {
          this.snackBar.open('Erro ao atualizar parceiro. Tente novamente.', 'Fechar', { duration: 3000 });
        }
      });
    } else {
      this.snackBar.open('Erro: ID do parceiro não encontrado.', 'Fechar', { duration: 3000 });
    }
  }
}
