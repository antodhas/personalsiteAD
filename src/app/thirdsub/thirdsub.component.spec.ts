import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdsubComponent } from './thirdsub.component';

describe('ThirdsubComponent', () => {
  let component: ThirdsubComponent;
  let fixture: ComponentFixture<ThirdsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdsubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
