import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Expense } from '../../models/expense.model';
import { ExpenseService } from '../../services/expense.service';
import { Budget } from '../../models/budget.model';
import { BudgetLine } from '../../models/budgetLine.model';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../../services/budget.service';
import { BudgetLineService } from '../../services/budgetLine.service';

@Component({
  selector: 'app-update-budget-expense',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './update-budget-expense.component.html',
  styleUrls: ['./update-budget-expense.component.css']
})
export class UpdateBudgetExpenseComponent{

  currentExpense: Expense = new Expense;

  budgets! : Budget[];
  lignes! : BudgetLine[];
  updateBudgetId! : number;
  updateLineId! : number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private expenseService: ExpenseService,
    private budgetService: BudgetService,
    private budgetLineService: BudgetLineService) {


      this.budgetService.listBudgets().subscribe(bud => {this.budgets = bud;});
      this.budgetLineService.listBudgetLine().subscribe(line => {this.lignes = line;});

      this.expenseService.consulterExpense(this.route.snapshot.params['id']).subscribe(expense => { this.currentExpense = expense;
        this.updateBudgetId = this.currentExpense.budget.id;
        this.updateLineId = this.currentExpense.budgetLine.id;
        console.log(this.currentExpense);
      });

  }

  updateExpense(){
    this.currentExpense.budget = this.budgets.find(bud => bud.id == this.updateBudgetId)!;
    this.currentExpense.budgetLine = this.lignes.find(line => line.id == this.updateLineId)!;

    this.expenseService.updateExpense(this.currentExpense).subscribe(expense => {
      const id = this.currentExpense.budget.center.id;
      this.router.navigate(['/center/',id]);
    });
  }

}
