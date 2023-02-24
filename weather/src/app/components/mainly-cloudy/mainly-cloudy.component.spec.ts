import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainlyCloudyComponent } from './mainly-cloudy.component';

describe('MainlyCloudyComponent', () => {
  let component: MainlyCloudyComponent;
  let fixture: ComponentFixture<MainlyCloudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainlyCloudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainlyCloudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
