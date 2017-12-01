import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchformPlayerComponent } from './searchform-player.component';

describe('SearchformPlayerComponent', () => {
  let component: SearchformPlayerComponent;
  let fixture: ComponentFixture<SearchformPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchformPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchformPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
