import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthsubComponent } from './fourthsub.component';

describe('FourthsubComponent', () => {
  let component: FourthsubComponent;
  let fixture: ComponentFixture<FourthsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthsubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
