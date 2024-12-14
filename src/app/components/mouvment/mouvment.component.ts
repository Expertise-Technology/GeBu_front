import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MouvmentService } from '../../services/mouvment.service';
import { Mouvment } from '../../models/mouvment.model';
import { CenterService } from '../../services/center.service';
import { AccountService } from '../../services/account.service';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-mouvment',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './mouvment.component.html',
  styleUrl: './mouvment.component.css'
})
export class MouvmentComponent {

  mouvments! : Mouvment[];
  centerName! : string;
  accountId!: number;
  totalCredit = 0;
  totalDebit = 0;
  solde = 0;
  acc! : Account;
  reload = 1;

  constructor( private mouvmentService: MouvmentService,
    private activedRoute: ActivatedRoute,
    private centerService: CenterService,
    private accountService: AccountService,
    private router: Router){

    this.accountService.accountCenter(this.activedRoute.snapshot.params['id']).subscribe(account => {
      if (account != null){
        this.accountId = account.id;
        this.centerName = account.center.name;
        this.acc = account;
      }

    });

    if (this.accountId != null) {
      this.mouvmentService.listMouvmentByAccount( this.accountId).subscribe(mouvments => {
        this.mouvments = mouvments;
        this.mouvments.forEach(mouvement => {
          if (mouvement.typeMv == 'credit'){
            this.totalCredit += mouvement.amountMv;
          }else if (mouvement.typeMv == 'debit'){
            this.totalDebit += mouvement.amountMv;
          }
          this.solde = this.totalCredit - this.totalDebit;


          this.acc.amount = this.solde;

          this.accountService.updateAccount(this.acc).subscribe(acc => {
            //console.log(acc.amount);
          });
        });

      });
    }

    // pour recharger la page mouvment ( a corriger)

  // const hasReloaded = sessionStorage.getItem('hasReloaded');

  // if (!hasReloaded) {
  //   sessionStorage.setItem('hasReloaded', 'true');
  //   window.location.reload();
  // } else {
  //   sessionStorage.removeItem('hasReloaded');
  // }

  }

}
