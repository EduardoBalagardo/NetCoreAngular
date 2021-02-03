import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorTipoUsuarioComponent } from './buscador-tipo-usuario.component';

describe('BuscadorTipoUsuarioComponent', () => {
  let component: BuscadorTipoUsuarioComponent;
  let fixture: ComponentFixture<BuscadorTipoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorTipoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorTipoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
