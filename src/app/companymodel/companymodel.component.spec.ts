import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanymodelComponent } from './companymodel.component';

describe('CompanymodelComponent', () => {
  let component: CompanymodelComponent;
  let fixture: ComponentFixture<CompanymodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanymodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanymodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
