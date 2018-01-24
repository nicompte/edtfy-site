import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRowComponent } from './demo-row.component';

describe('DemoRowComponent', () => {
  let component: DemoRowComponent;
  let fixture: ComponentFixture<DemoRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
