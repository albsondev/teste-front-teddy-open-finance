import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PartnerService } from './partner.service';

describe('PartnerService', () => {
  let service: PartnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PartnerService]
    });
    service = TestBed.inject(PartnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
