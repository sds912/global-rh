import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoirFaireComponent } from './savoir-faire.component';

describe('SavoirFaireComponent', () => {
  let component: SavoirFaireComponent;
  let fixture: ComponentFixture<SavoirFaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavoirFaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavoirFaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
