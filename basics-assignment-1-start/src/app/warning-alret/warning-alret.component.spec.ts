import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningAlretComponent } from './warning-alret.component';

describe('WarningAlretComponent', () => {
  let component: WarningAlretComponent;
  let fixture: ComponentFixture<WarningAlretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningAlretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningAlretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
