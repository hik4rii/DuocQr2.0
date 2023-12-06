import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddaPage } from './adda.page';

describe('AddaPage', () => {
  let component: AddaPage;
  let fixture: ComponentFixture<AddaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
