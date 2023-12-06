import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BibliotecaonlinePage } from './bibliotecaonline.page';

describe('BibliotecaonlinePage', () => {
  let component: BibliotecaonlinePage;
  let fixture: ComponentFixture<BibliotecaonlinePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BibliotecaonlinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
