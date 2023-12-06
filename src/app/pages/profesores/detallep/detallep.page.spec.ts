import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallepPage } from './detallep.page';

describe('DetallepPage', () => {
  let component: DetallepPage;
  let fixture: ComponentFixture<DetallepPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
