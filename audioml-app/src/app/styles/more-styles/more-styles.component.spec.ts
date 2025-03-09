import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreStylesComponent } from './more-styles.component';

describe('MoreStylesComponent', () => {
  let component: MoreStylesComponent;
  let fixture: ComponentFixture<MoreStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreStylesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
