import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowmComponent } from './dropdowm.component';

describe('DropdowmComponent', () => {
  let component: DropdowmComponent;
  let fixture: ComponentFixture<DropdowmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdowmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdowmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
