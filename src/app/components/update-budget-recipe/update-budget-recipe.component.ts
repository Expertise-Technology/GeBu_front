import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { Budget } from '../../models/budget.model';
import { BudgetService } from '../../services/budget.service';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-update-budget-recipe',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './update-budget-recipe.component.html',
  styleUrl: './update-budget-recipe.component.css'
})
export class UpdateBudgetRecipeComponent {


  currentRecipe: Recipe = new Recipe;

  budgets! : Budget[];
  updateBudgetId! : number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
    private budgetService: BudgetService,){

      this.budgetService.listBudgets().subscribe(bud => {this.budgets = bud;});

      this.recipeService.consulterRecipe(this.route.snapshot.params['id']).subscribe(recipe => { this.currentRecipe = recipe;
        this.updateBudgetId = this.currentRecipe.budget.id;
        console.log(this.currentRecipe);
      });

  }

  updateRecipe(){
    this.currentRecipe.budget = this.budgets.find(bud => bud.id == this.updateBudgetId)!;

    this.recipeService.updateRecipe(this.currentRecipe).subscribe(recipe => {
      const id = this.currentRecipe.budget.center.id;
      this.router.navigate(['/center/',id]);
    });
  }
}
