import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebeMaterialPage } from './recebe-material.page';

describe('RecebeMaterialPage', () => {
  let component: RecebeMaterialPage;
  let fixture: ComponentFixture<RecebeMaterialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecebeMaterialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebeMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
