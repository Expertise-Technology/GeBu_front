import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { Budget } from '../../models/budget.model';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BudgetService } from '../../services/budget.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-budget-recipe',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './add-budget-recipe.component.html',
  styleUrl: './add-budget-recipe.component.css'
})
export class AddBudgetRecipeComponent {

  newRecipe: Recipe = new Recipe();
  budget! : Budget;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
    private budgetService: BudgetService) {

      this.budgetService.consulterBudget(this.route.snapshot.params['id']).subscribe(budget => {
        this.budget = budget;
      });

    }

  addRecipe(){

    this.newRecipe.budget = this.budget;

    this.recipeService.addRecipeService(this.newRecipe).subscribe(expense => {
      const id = this.newRecipe.budget.center.id;
      this.router.navigate(['/center/1']);
    });

  }


}
