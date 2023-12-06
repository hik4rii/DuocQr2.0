import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleaPage } from './detallea.page';

describe('DetalleaPage', () => {
  let component: DetalleaPage;
  let fixture: ComponentFixture<DetalleaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
