import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecsriptComponent } from './typecsript.component';

describe('TypecsriptComponent', () => {
  let component: TypecsriptComponent;
  let fixture: ComponentFixture<TypecsriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypecsriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypecsriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
