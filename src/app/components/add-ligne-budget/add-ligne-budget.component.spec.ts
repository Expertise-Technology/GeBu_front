import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLigneBudgetComponent } from './add-ligne-budget.component';

describe('AddLigneBudgetComponent', () => {
  let component: AddLigneBudgetComponent;
  let fixture: ComponentFixture<AddLigneBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLigneBudgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLigneBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
