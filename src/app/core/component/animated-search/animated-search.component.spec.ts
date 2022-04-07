import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedSearchComponent } from './animated-search.component';

describe('AnimatedSearchComponent', () => {
  let component: AnimatedSearchComponent;
  let fixture: ComponentFixture<AnimatedSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
