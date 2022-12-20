import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkDetailsComponent } from './talk-details.component';

describe('TalkDetailsComponent', () => {
  let component: TalkDetailsComponent;
  let fixture: ComponentFixture<TalkDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalkDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
