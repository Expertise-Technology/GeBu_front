import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Budget } from '../../models/budget.model';
import { Year } from '../../models/year.model';
import { Center } from '../../models/center.model';
import { BudgetService } from '../../services/budget.service';
import { CenterService } from '../../services/center.service';
import { YearService } from '../../services/year.service';

@Component({
  selector: 'app-add-budget',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './add-budget.component.html',
  styleUrl: './add-budget.component.css'
})
export class AddBudgetComponent {


  newBudget: Budget = new Budget();

  listYear! : Year[];
  newIdYear! : number;
  center! : Center;


  newYear: Year = new Year();
  isOtherYear: boolean = false;


  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private budgetService: BudgetService,
    private centerService: CenterService,
    private yearService: YearService) {

      this.yearService.listYears().subscribe(year => {this.listYear = year});
      this.centerService.consulterCenter(this.activatedRoute.snapshot.params['id']).subscribe(center => {
        this.center = center;
        console.log(this.center);
      });

    }

addBudget() {
  this.newBudget.year = this.listYear.find(year => year.id == this.newIdYear)!;
  this.newBudget.center = this.center;
  this.budgetService.addBudgetService(this.newBudget).subscribe(budget => {
    this.router.navigate(['/center/', this.center.id]);
  });
}

addYear(){
  return this.yearService.addYear(this.newYear).subscribe(year => {
    console.log(this.newYear);
    this.router.navigate(['/center/', this.center.id]);
  });
}

checkIfOther(event: any): void {
  this.isOtherYear = event === 'other';
  if (!this.isOtherYear) {
    this.newYear.libellerYear = '';
  }
}

}
