import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerComponent } from './exer.component';

describe('ExerComponent', () => {
  let component: ExerComponent;
  let fixture: ComponentFixture<ExerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
