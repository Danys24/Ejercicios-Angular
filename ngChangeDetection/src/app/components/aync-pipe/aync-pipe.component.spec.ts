import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyncPipeComponent } from './aync-pipe.component';

describe('AyncPipeComponent', () => {
  let component: AyncPipeComponent;
  let fixture: ComponentFixture<AyncPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyncPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
