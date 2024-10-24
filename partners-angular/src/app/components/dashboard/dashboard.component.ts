import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../../services/partner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  partners: any[] = [];

  constructor(private partnerService: PartnerService) {}

  ngOnInit(): void {
    this.partnerService.getPartners().subscribe(data => {
      this.partners = data;
    });
  }

  deletePartner(id: string) {
    this.partnerService.deletePartner(id).subscribe(() => {
      this.partners = this.partners.filter(p => p.id !== id);
    });
  }
}
