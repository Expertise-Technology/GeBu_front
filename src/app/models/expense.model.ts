import { Budget } from "./budget.model";
import { BudgetLine } from "./budgetLine.model";

export class Expense {
  id! : number;
  amount! : number;
  isEditing! : boolean;
  budget! : Budget;
  budgetLine! : BudgetLine;
  paid! : boolean;
}
