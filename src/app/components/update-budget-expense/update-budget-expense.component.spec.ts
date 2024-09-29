import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBudgetExpenseComponent } from './update-budget-expense.component';

describe('UpdateBudgetExpenseComponent', () => {
  let component: UpdateBudgetExpenseComponent;
  let fixture: ComponentFixture<UpdateBudgetExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBudgetExpenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBudgetExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
