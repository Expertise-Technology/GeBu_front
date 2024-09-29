import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../models/budget.model';
import { Expense } from '../../models/expense.model';
import { ExpenseService } from '../../services/expense.service';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { AccountService } from '../../services/account.service';
import { CenterService } from '../../services/center.service';
import { Account } from '../../models/account.model';


@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule

  ],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent {

  centerId! : number;
  centerName! : string;
  budgets!: Budget[];
  expenses!: Expense[];

  totalExpense! : number;
  recipes!: Recipe[];
  totalRecipe! : number;

  amount! : number;
  // accountId!: number;

  newAccount: Account = new Account();

  constructor(private budgetService: BudgetService,
    private accountService: AccountService,
    private expenseService: ExpenseService,
    private recipeService: RecipeService,
    private activationRoute: ActivatedRoute,
    private centerService: CenterService) {

      this.budgetService.listBudgetsByCenter(this.activationRoute.snapshot.params["id"]).subscribe(budget =>  { this.budgets = budget,

        this.budgets.forEach(budget => {

          this.expenseService.listExpensesByBudget(budget.id).subscribe(expense =>  { budget.expense = expense,
            budget.totalExpense = expense.reduce((sum, element) => sum + element.amount, 0);
          });

          this.recipeService.listRecipesByBudget(budget.id).subscribe(recipe =>  { budget.recipe = recipe;
            budget.totalRecipe = recipe.reduce((sum, element) => sum + element.amount, 0);
          });
        });

       });

       this.accountService.accountCenter(this.activationRoute.snapshot.params["id"]).subscribe(account =>  {
        this.amount = account.amount
        // this.accountId = account.id;
       });

       this.centerService.consulterCenter(this.activationRoute.snapshot.params["id"]).subscribe(center => {
        this.centerId = center.id,
        this.centerName = center.name;
        this.newAccount.center = center;
       });
  }

  // Delete Expense
  deleteExpense(expense: Expense) {
    let conf = confirm("Etes-vous sûr ? ");
    if (conf)
      this.expenseService.deleteExpense(expense.id).subscribe(() => {
        const id = expense.budget.center.id;
        const url = `/center/${id}`;
        window.location.href = url;
    });
  }

  // Delete recipe
  deleteRecipe(recipe: Recipe) {
    let conf = confirm("Etes-vous sûr ? ");
    if (conf)
      this.recipeService.deleteRecipe(recipe.id).subscribe(() => {
        const id = recipe.budget.center.id;
        const url = `/center/${id}`;
        window.location.href = url;
    });
  }

  addAccount(){
    this.accountService.addAccount(this.newAccount).subscribe(account => {
      console.log(this.newAccount);
      const id = this.newAccount.center.id;
      const url = `/center/${id}`;
      window.location.href = url;
    });
  }

}
