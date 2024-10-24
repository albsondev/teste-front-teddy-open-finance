import { Component } from '@angular/core';
import { PartnerService } from '../../services/partner.service';

@Component({
  selector: 'app-add-partner',
  templateUrl: './add-partner.component.html',
  styleUrls: ['./add-partner.component.scss']
})
export class AddPartnerComponent {
  partner = { name: '', service: '' };

  constructor(private partnerService: PartnerService) {}

  addPartner() {
    this.partnerService.addPartner(this.partner).subscribe(response => {
      console.log('Parceiro adicionado:', response);
      // Redirecionar ou mostrar mensagem de sucesso
    });
  }
}
