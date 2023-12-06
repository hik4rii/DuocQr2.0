import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatepPage } from './updatep.page';

describe('UpdatepPage', () => {
  let component: UpdatepPage;
  let fixture: ComponentFixture<UpdatepPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdatepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
