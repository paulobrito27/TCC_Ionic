import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparaMaterialPage } from './separa-material.page';

describe('SeparaMaterialPage', () => {
  let component: SeparaMaterialPage;
  let fixture: ComponentFixture<SeparaMaterialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparaMaterialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparaMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
