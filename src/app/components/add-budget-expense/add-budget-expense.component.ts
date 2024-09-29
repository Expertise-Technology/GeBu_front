import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';
import { BudgetLine } from '../../models/budgetLine.model';
import { BudgetLineService } from '../../services/budgetLine.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../models/budget.model';

@Component({
  selector: 'app-add-budget-expense',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './add-budget-expense.component.html',
  styleUrl: './add-budget-expense.component.css'
})
export class AddBudgetExpenseComponent {

  newExpense: Expense = new Expense();

  listLine! : BudgetLine[];
  newIDline! : number;
  budget! : Budget;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private expenseService: ExpenseService,
    private budgetLineService: BudgetLineService,
    private budgetService: BudgetService) {

      this.budgetLineService.listBudgetLine().subscribe(line => {this.listLine = line});
      this.budgetService.consulterBudget(this.route.snapshot.params['id']).subscribe(budget => {
        this.budget = budget;
      });

    }

  addExpense(){

    this.newExpense.budgetLine = this.listLine.find(line => line.id == this.newIDline)!;
    this.newExpense.budget = this.budget;
    console.log(this.newExpense);

    this.expenseService.addExpenseService(this.newExpense).subscribe(expense => {
      const id = this.newExpense.budget.center.id;
      this.router.navigate(['/center/1']);
    });

  }

}
