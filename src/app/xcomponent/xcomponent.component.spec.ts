import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XcomponentComponent } from './xcomponent.component';

describe('XcomponentComponent', () => {
  let component: XcomponentComponent;
  let fixture: ComponentFixture<XcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
