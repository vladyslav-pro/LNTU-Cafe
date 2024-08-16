import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveReservationComponent } from './active-reservation.component';

describe('ActiveReservationComponent', () => {
  let component: ActiveReservationComponent;
  let fixture: ComponentFixture<ActiveReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
