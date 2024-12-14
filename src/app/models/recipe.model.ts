import { Budget } from "./budget.model";

export class Recipe {
  id! : number;
  libelle! : string;
  amount! : number;
  isEditing! : boolean;
  budget! : Budget;
  cashed! : boolean;
}
