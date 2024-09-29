import { Category } from "./category";

export class BudgetLine {
  id! : number;
  numLine! : number;
  description! : string;
  category! : Category;
}
