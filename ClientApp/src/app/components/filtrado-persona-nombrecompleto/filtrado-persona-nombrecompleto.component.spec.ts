import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltradoPersonaNombrecompletoComponent } from './filtrado-persona-nombrecompleto.component';

describe('FiltradoPersonaNombrecompletoComponent', () => {
  let component: FiltradoPersonaNombrecompletoComponent;
  let fixture: ComponentFixture<FiltradoPersonaNombrecompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltradoPersonaNombrecompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltradoPersonaNombrecompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
