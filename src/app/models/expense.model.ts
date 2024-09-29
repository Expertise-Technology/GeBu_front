import { Budget } from "./budget.model";
import { BudgetLine } from "./budgetLine.model";

export class Expense {
  id! : number;
  amount! : number;
  budget! : Budget;
  budgetLine! : BudgetLine;
}
