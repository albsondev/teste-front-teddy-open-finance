import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PartnerService } from './partner.service';

describe('PartnerService', () => {
  let service: PartnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [PartnerService]
    });
    service = TestBed.inject(PartnerService);
  });
});
