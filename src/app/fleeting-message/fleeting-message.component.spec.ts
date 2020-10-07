import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetingMessageComponent } from './fleeting-message.component';

describe('FleetingMessageComponent', () => {
  let component: FleetingMessageComponent;
  let fixture: ComponentFixture<FleetingMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetingMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
