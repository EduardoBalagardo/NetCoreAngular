import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiasSemanaComponent } from './dias-semana.component';

describe('DiasSemanaComponent', () => {
  let component: DiasSemanaComponent;
  let fixture: ComponentFixture<DiasSemanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiasSemanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiasSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
