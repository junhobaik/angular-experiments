import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceExComponent } from './service-ex.component';

describe('ServiceExComponent', () => {
  let component: ServiceExComponent;
  let fixture: ComponentFixture<ServiceExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
