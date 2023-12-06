import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatealPage } from './updateal.page';

describe('UpdatealPage', () => {
  let component: UpdatealPage;
  let fixture: ComponentFixture<UpdatealPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdatealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
