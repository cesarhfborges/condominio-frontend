import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLayoutComponent } from './full-layout.component';

describe('FullComponent', () => {
  let component: FullLayoutComponent;
  let fixture: ComponentFixture<FullLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullLayoutComponent]
    });
    fixture = TestBed.createComponent(FullLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
