import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthcompComponent } from './fifthcomp.component';

describe('FifthcompComponent', () => {
  let component: FifthcompComponent;
  let fixture: ComponentFixture<FifthcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
