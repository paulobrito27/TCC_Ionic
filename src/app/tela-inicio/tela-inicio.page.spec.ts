import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicioPage } from './tela-inicio.page';

describe('TelaInicioPage', () => {
  let component: TelaInicioPage;
  let fixture: ComponentFixture<TelaInicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaInicioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
