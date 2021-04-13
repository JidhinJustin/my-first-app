import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlpannelComponent } from './controlpannel.component';

describe('ControlpannelComponent', () => {
  let component: ControlpannelComponent;
  let fixture: ComponentFixture<ControlpannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlpannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlpannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
