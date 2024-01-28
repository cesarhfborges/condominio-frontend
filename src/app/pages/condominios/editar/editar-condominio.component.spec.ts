import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCondominioComponent } from './editar-condominio.component';

describe('EditarCondominioComponent', () => {
  let component: EditarCondominioComponent;
  let fixture: ComponentFixture<EditarCondominioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarCondominioComponent]
    });
    fixture = TestBed.createComponent(EditarCondominioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
