import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcurdComponent } from './studentcurd.component';

describe('StudentcurdComponent', () => {
  let component: StudentcurdComponent;
  let fixture: ComponentFixture<StudentcurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentcurdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentcurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
