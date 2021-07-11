import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfeatureComponent } from './newfeature.component';

describe('NewfeatureComponent', () => {
  let component: NewfeatureComponent;
  let fixture: ComponentFixture<NewfeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewfeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
