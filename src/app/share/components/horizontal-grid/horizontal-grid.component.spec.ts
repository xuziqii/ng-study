/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HorizatalGridComponent } from './horizatal-grid.component';

describe('HorizatalGridComponent', () => {
  let component: HorizatalGridComponent;
  let fixture: ComponentFixture<HorizatalGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizatalGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizatalGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
