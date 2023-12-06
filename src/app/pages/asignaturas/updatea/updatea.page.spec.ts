import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateaPage } from './updatea.page';

describe('UpdateaPage', () => {
  let component: UpdateaPage;
  let fixture: ComponentFixture<UpdateaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
