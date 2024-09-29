import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBudgetRecipeComponent } from './add-budget-recipe.component';

describe('AddBudgetRecipeComponent', () => {
  let component: AddBudgetRecipeComponent;
  let fixture: ComponentFixture<AddBudgetRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBudgetRecipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBudgetRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
