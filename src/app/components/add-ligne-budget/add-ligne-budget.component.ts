import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BudgetLineService } from '../../services/budgetLine.service';
import { BudgetLine } from '../../models/budgetLine.model';

@Component({
  selector: 'app-add-ligne-budget',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './add-ligne-budget.component.html',
  styleUrl: './add-ligne-budget.component.css'
})
export class AddLigneBudgetComponent {


  newBudgetLine: BudgetLine = new BudgetLine();

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private budgetLineService: BudgetLineService) {

      }

    addBudgetLine(){
      this.budgetLineService.addBudgetLine(this.newBudgetLine).subscribe(budgetLine => {
      const url = `/addligne`;
      window.location.href = url;
    });

  }
  
}
