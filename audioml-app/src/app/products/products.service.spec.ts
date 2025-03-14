import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ProductsService } from './products.service';


describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(ProductsService);
      
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
