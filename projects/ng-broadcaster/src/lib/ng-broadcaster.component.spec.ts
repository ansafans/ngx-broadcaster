import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBroadcasterComponent } from './ng-broadcaster.component';

describe('NgBroadcasterComponent', () => {
  let component: NgBroadcasterComponent;
  let fixture: ComponentFixture<NgBroadcasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBroadcasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBroadcasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
