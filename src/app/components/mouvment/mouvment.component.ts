import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MouvmentService } from '../../services/mouvment.service';
import { Mouvment } from '../../models/mouvment.model';
import { CenterService } from '../../services/center.service';
import { AccountService } from '../../services/account.service';

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

  constructor( private mouvmentService: MouvmentService,
    private activedRoute: ActivatedRoute,
    private centerService: CenterService,
    private accountService: AccountService,
    private router: Router){

    this.accountService.accountCenter(this.activedRoute.snapshot.params['id']).subscribe(account => {
      this.accountId = account.id;
      this.centerName = account.center.name;
    });

    this.mouvmentService.listMouvmentByAccount( this.accountId).subscribe(mouvments => {
      this.mouvments = mouvments;
    });

  }

}
