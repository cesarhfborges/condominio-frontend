import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMoradoresComponent } from './listar-moradores.component';

describe('ListarMoradoresComponent', () => {
  let component: ListarMoradoresComponent;
  let fixture: ComponentFixture<ListarMoradoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMoradoresComponent]
    });
    fixture = TestBed.createComponent(ListarMoradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
