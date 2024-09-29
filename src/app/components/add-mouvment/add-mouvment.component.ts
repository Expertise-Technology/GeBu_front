import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { CenterService } from '../../services/center.service';
import { MouvmentService } from '../../services/mouvment.service';
import { Mouvment } from '../../models/mouvment.model';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-add-mouvment',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './add-mouvment.component.html',
  styleUrl: './add-mouvment.component.css'
})
export class AddMouvmentComponent {

  accountId!: number;
  newMouvment: Mouvment = new Mouvment();
  listAccount! : Account[];

  constructor( private mouvmentService: MouvmentService,
    private activedRoute: ActivatedRoute,
    private accountService: AccountService ){

    this.accountId = this.activedRoute.snapshot.params['id'];

    this.accountService.listAccount().subscribe(account => {
      this.listAccount = account
    });
  }

  addMouvment(){
    this.newMouvment.account = this.listAccount.find(account => account.id == this.accountId)!;
    this.mouvmentService.addMouvmentService(this.newMouvment).subscribe(mouvment => {
    const url = `/addmouvment/${this.accountId}`;
    window.location.href = url;
    });
  }

}
