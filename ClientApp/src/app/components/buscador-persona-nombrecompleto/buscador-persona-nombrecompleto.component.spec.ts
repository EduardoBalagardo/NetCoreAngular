import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorPersonaNombrecompletoComponent } from './buscador-persona-nombrecompleto.component';

describe('BuscadorPersonaNombrecompletoComponent', () => {
  let component: BuscadorPersonaNombrecompletoComponent;
  let fixture: ComponentFixture<BuscadorPersonaNombrecompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorPersonaNombrecompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorPersonaNombrecompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
