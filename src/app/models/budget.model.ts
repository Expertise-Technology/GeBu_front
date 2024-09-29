import { Center } from "./center.model";
import { Expense } from "./expense.model";
import { Payment } from "./payment.model";
import { Recipe } from "./recipe.model";
import { Year } from "./year.model";

export class Budget {
  id! : number;
  center! : Center;
  year! : Year;
  periode! : string;
  expense! : Expense[];
  totalExpense! : number;
  recipe! : Recipe[];
  totalRecipe!: number;
}
