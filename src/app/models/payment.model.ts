import { Budget } from "./budget.model";

export class Payment {
  id! : number;
  libelle! : string;
  observation! : string;
  amount! : number;
  date! : Date;
  budget! : Budget;
}
