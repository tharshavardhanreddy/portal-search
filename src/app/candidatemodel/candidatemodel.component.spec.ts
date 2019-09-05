import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatemodelComponent } from './candidatemodel.component';

describe('CandidatemodelComponent', () => {
  let component: CandidatemodelComponent;
  let fixture: ComponentFixture<CandidatemodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatemodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
