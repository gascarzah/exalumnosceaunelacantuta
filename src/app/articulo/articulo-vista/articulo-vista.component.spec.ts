import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloVistaComponent } from './articulo-vista.component';

describe('ArticuloVistaComponent', () => {
  let component: ArticuloVistaComponent;
  let fixture: ComponentFixture<ArticuloVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
