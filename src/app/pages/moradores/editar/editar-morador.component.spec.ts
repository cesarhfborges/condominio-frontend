import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMoradorComponent } from './editar-morador.component';

describe('EditarMoradorComponent', () => {
  let component: EditarMoradorComponent;
  let fixture: ComponentFixture<EditarMoradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarMoradorComponent]
    });
    fixture = TestBed.createComponent(EditarMoradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
