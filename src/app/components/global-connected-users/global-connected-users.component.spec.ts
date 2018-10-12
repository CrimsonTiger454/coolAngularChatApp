import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalConnectedUsersComponent } from './global-connected-users.component';

describe('GlobalConnectedUsersComponent', () => {
  let component: GlobalConnectedUsersComponent;
  let fixture: ComponentFixture<GlobalConnectedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalConnectedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalConnectedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
