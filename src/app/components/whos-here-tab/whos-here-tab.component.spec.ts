import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhosHereTabComponent } from './whos-here-tab.component';

describe('WhosHereTabComponent', () => {
  let component: WhosHereTabComponent;
  let fixture: ComponentFixture<WhosHereTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhosHereTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhosHereTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
