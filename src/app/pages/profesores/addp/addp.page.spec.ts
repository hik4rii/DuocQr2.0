import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddpPage } from './addp.page';

describe('AddpPage', () => {
  let component: AddpPage;
  let fixture: ComponentFixture<AddpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
