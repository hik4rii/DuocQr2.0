import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallenotcrudPage } from './detallenotcrud.page';

describe('DetallenotcrudPage', () => {
  let component: DetallenotcrudPage;
  let fixture: ComponentFixture<DetallenotcrudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallenotcrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
