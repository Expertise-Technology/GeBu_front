import { Account } from "./account.model";

export class Mouvment {
  id! : number;
  libele! : string;
  dateMv! : Date;
  typeMv! : string;
  amountMv! : number;
  account! : Account;
  reference! : string;
  value! : Date;
}
