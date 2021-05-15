import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutKoinComponent } from './about-koin.component';

describe('AboutKoinComponent', () => {
  let component: AboutKoinComponent;
  let fixture: ComponentFixture<AboutKoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutKoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutKoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
