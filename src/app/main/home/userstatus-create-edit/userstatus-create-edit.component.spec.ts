import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstatusCreateEditComponent } from './userstatus-create-edit.component';

describe('UserstatusCreateEditComponent', () => {
  let component: UserstatusCreateEditComponent;
  let fixture: ComponentFixture<UserstatusCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserstatusCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstatusCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
