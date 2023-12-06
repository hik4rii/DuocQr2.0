import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddalPage } from './addal.page';

describe('AddalPage', () => {
  let component: AddalPage;
  let fixture: ComponentFixture<AddalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
