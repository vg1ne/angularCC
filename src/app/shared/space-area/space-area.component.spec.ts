import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceAreaComponent } from './space-area.component';

describe('SpaceAreaComponent', () => {
  let component: SpaceAreaComponent;
  let fixture: ComponentFixture<SpaceAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
