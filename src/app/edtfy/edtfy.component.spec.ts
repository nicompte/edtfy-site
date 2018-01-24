import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtfyComponent } from './edtfy.component';

describe('EdtfyComponent', () => {
  let component: EdtfyComponent;
  let fixture: ComponentFixture<EdtfyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtfyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtfyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
