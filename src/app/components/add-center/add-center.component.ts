import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Center } from '../../models/center.model';
import { CenterService } from '../../services/center.service';
import { AccountService } from '../../services/account.service';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-add-center',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './add-center.component.html',
  styleUrl: './add-center.component.css'
})
export class AddCenterComponent {

  newCenter: Center = new Center();
  newAccount: Account = new Account();

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private centerService: CenterService,
    private accountService: AccountService) {

      }

  addCenter(){
    this.centerService.addCenter(this.newCenter).subscribe(center => {
    const url = `/addcenter`;
    window.location.href = url;
    });
  }

}
