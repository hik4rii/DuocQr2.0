import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturanotcrudPage } from './asignaturanotcrud.page';

describe('AsignaturanotcrudPage', () => {
  let component: AsignaturanotcrudPage;
  let fixture: ComponentFixture<AsignaturanotcrudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsignaturanotcrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
