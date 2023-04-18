import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomUserpageComponent } from './random-userpage.component';

describe('RandomUserpageComponent', () => {
  let component: RandomUserpageComponent;
  let fixture: ComponentFixture<RandomUserpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomUserpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomUserpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
