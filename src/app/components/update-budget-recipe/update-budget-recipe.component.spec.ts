import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBudgetRecipeComponent } from './update-budget-recipe.component';

describe('UpdateBudgetRecipeComponent', () => {
  let component: UpdateBudgetRecipeComponent;
  let fixture: ComponentFixture<UpdateBudgetRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBudgetRecipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBudgetRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
