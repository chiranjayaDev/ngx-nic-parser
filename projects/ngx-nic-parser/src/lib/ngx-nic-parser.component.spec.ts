import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNicParserComponent } from './ngx-nic-parser.component';

describe('NgxNicParserComponent', () => {
  let component: NgxNicParserComponent;
  let fixture: ComponentFixture<NgxNicParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNicParserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNicParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
