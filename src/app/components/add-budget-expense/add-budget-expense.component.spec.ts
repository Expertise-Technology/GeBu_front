import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBudgetExpenseComponent } from './add-budget-expense.component';

describe('AddBudgetExpenseComponent', () => {
  let component: AddBudgetExpenseComponent;
  let fixture: ComponentFixture<AddBudgetExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBudgetExpenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBudgetExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
